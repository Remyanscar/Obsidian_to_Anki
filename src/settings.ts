import { PluginSettingTab, Setting, Notice, TFolder } from 'obsidian'
import * as AnkiConnect from './anki'

const defaultDescs = {
    "Scan Directory": "The directory to scan. Leave empty to scan the entire vault",
    "Tag": "The tag that the plugin automatically adds to any generated cards.",
    "Deck": "The deck the plugin adds cards to if TARGET DECK is not specified in the file.",
    "Scheduling Interval": "The time, in minutes, between automatic scans of the vault. Set this to 0 to disable automatic scanning.",
    "Add File Link": "Append a link to the file that generated the flashcard on the field specified in the table.",
    "Add Context": "Append 'context' for the card, in the form of path > heading > heading etc, to the field specified in the table.",
    "CurlyCloze": "Convert {cloze deletions} -> {{c1::cloze deletions}} on note types that have a 'Cloze' in their name.",
    "CurlyCloze - Highlights to Clozes": "Convert ==highlights== -> {highlights} to be processed by CurlyCloze.",
    "ID Comments": "Wrap note IDs in a HTML comment.",
    "Add Obsidian Tags": "Interpret #tags in the fields of a note as Anki tags, removing them from the note text in Anki."
}

export const DEFAULT_IGNORED_FILE_GLOBS = [
    '**/*.excalidraw.md'
]

export class SettingsTab extends PluginSettingTab {
    setup_custom_regexp(note_type: string, row_cells: HTMLCollection) {
        const plugin = (this as any).plugin
        let regexp_section = plugin.settings["CUSTOM_REGEXPS"]
        let custom_regexp = new Setting(row_cells[1] as HTMLElement)
            .addText(
                text => text.setValue(
                    regexp_section.hasOwnProperty(note_type) ? regexp_section[note_type] : ""
                ).onChange((value) => {
                    plugin.settings["CUSTOM_REGEXPS"][note_type] = value
                    plugin.saveAllData().catch(console.error)
                })
            )
        custom_regexp.settingEl = row_cells[1] as HTMLElement
        custom_regexp.infoEl.remove()
        custom_regexp.controlEl.className += " anki-center"
    }

    setup_link_field(note_type: string, row_cells: HTMLCollection) {
        const plugin = (this as any).plugin
        let link_fields_section = plugin.settings.FILE_LINK_FIELDS
        let link_field = new Setting(row_cells[2] as HTMLElement)
            .addDropdown(
                dropdown => {
                    (async () => {
                        if (!(plugin.fields_dict[note_type])) {
                            plugin.fields_dict = await plugin.loadFieldsDict()
                            if (Object.keys(plugin.fields_dict).length != plugin.note_types.length) {
                                new Notice('Need to connect to Anki to generate fields dictionary...')
                                try {
                                    plugin.fields_dict = await plugin.generateFieldsDict()
                                    new Notice("Fields dictionary successfully generated!")
                                } catch(e) {
                                    new Notice("Couldn't connect to Anki! Check console for error message.")
                                    return
                                }
                            }
                        }
                        const field_names = plugin.fields_dict[note_type] || []
                        for (let field of field_names) {
                            dropdown.addOption(field, field)
                        }
                        dropdown.setValue(
                            link_fields_section.hasOwnProperty(note_type) ? link_fields_section[note_type] : field_names[0]
                        ).onChange((value) => {
                            plugin.settings.FILE_LINK_FIELDS[note_type] = value
                            plugin.saveAllData().catch(console.error)
                        })
                    })().catch(console.error)
                }
            )
        link_field.settingEl = row_cells[2] as HTMLElement
        link_field.infoEl.remove()
        link_field.controlEl.className += " anki-center"
    }

    setup_context_field(note_type: string, row_cells: HTMLCollection) {
        const plugin = (this as any).plugin
        let context_fields_section: Record<string, string> = plugin.settings.CONTEXT_FIELDS
        let context_field = new Setting(row_cells[3] as HTMLElement)
            .addDropdown(
                dropdown => {
                    (async () => {
                        const field_names = plugin.fields_dict[note_type] || []
                        for (let field of field_names) {
                            dropdown.addOption(field, field)
                        }
                        dropdown.setValue(
                            context_fields_section.hasOwnProperty(note_type) ? context_fields_section[note_type] : field_names[0]
                        ).onChange((value) => {
                            plugin.settings.CONTEXT_FIELDS[note_type] = value
                            plugin.saveAllData().catch(console.error)
                        })
                    })().catch(console.error)
                }
            )
        context_field.settingEl = row_cells[3] as HTMLElement
        context_field.infoEl.remove()
        context_field.controlEl.className += " anki-center"
    }

    create_collapsible(name: string) {
        let {containerEl} = this;
        let div = containerEl.createEl('div', {cls: "collapsible-item"})
        div.innerHTML = `
        <div class="collapsible-item-self"><div class="collapsible-item-collapse collapse-icon anki-rotated"><svg viewBox="0 0 100 100" width="8" height="8" class="right-triangle"><path fill="currentColor" stroke="currentColor" d="M94.9,20.8c-1.4-2.5-4.1-4.1-7.1-4.1H12.2c-3,0-5.7,1.6-7.1,4.1c-1.3,2.4-1.2,5.2,0.2,7.6L43.1,88c1.5,2.3,4,3.7,6.9,3.7 s5.4-1.4,6.9-3.7l37.8-59.6C96.1,26,96.2,23.2,94.9,20.8L94.9,20.8z"></path></svg></div><div class="collapsible-item-inner"></div><header>${name}</header></div>
        `
        div.addEventListener('click', function () {
            this.classList.toggle("active")
            let icon = this.firstElementChild?.firstElementChild as HTMLElement
            if (icon) icon.classList.toggle("anki-rotated")
            let content = this.nextElementSibling as HTMLElement
            if (content.style.display === "block") {
                content.style.display = "none"
            } else {
                content.style.display = "block"
            }
        })
    }

    setup_note_table() {
        let {containerEl} = this;
        const plugin = (this as any).plugin
        containerEl.createEl('h3', {text: 'Note type settings'})

        this.create_collapsible("Note Type Table")
        let note_type_table = containerEl.createEl('table', {cls: "anki-settings-table"})
        let head = note_type_table.createTHead()
        let header_row = head.insertRow()
        for (let header of ["Note Type", "Custom Regexp", "File Link Field", "Context Field"]) {
            let th = document.createElement("th")
            th.appendChild(document.createTextNode(header))
            header_row.appendChild(th)
        }

        let main_body = note_type_table.createTBody()
        if (!(plugin.settings.hasOwnProperty("CONTEXT_FIELDS"))) {
            plugin.settings.CONTEXT_FIELDS = {}
        }

        for (let note_type of plugin.note_types) {
            let row = main_body.insertRow()
            row.insertCell()
            row.insertCell()
            row.insertCell()
            row.insertCell()

            let row_cells = row.children
            row_cells[0]!.innerHTML = note_type
            this.setup_custom_regexp(note_type, row_cells)
            this.setup_link_field(note_type, row_cells)
            this.setup_context_field(note_type, row_cells)
        }
    }

    setup_syntax() {
        let {containerEl} = this;
        const plugin = (this as any).plugin
        containerEl.createEl('h3', {text: 'Syntax Settings'})
        for (let key of Object.keys(plugin.settings["Syntax"])) {
            void new Setting(containerEl)
                .setName(key)
                .addText(
                    text => text.setValue(plugin.settings["Syntax"][key])
                    .onChange((value) => {
                        plugin.settings["Syntax"][key] = value
                        plugin.saveAllData().catch(console.error)
                    })
                )
        }
    }

    setup_defaults() {
        let {containerEl} = this;
        const plugin = (this as any).plugin
        containerEl.createEl('h3', {text: 'Defaults'})

        if (!(plugin.settings["Defaults"].hasOwnProperty("Scan Directory"))) {
            plugin.settings["Defaults"]["Scan Directory"] = ""
        }
        if (!(plugin.settings["Defaults"].hasOwnProperty("Add Context"))) {
            plugin.settings["Defaults"]["Add Context"] = false
        }
        if (!(plugin.settings["Defaults"].hasOwnProperty("Scheduling Interval"))) {
            plugin.settings["Defaults"]["Scheduling Interval"] = 0
        }
        if (!(plugin.settings["Defaults"].hasOwnProperty("CurlyCloze - Highlights to Clozes"))) {
            plugin.settings["Defaults"]["CurlyCloze - Highlights to Clozes"] = false
        }
        if (!(plugin.settings["Defaults"].hasOwnProperty("Add Obsidian Tags"))) {
            plugin.settings["Defaults"]["Add Obsidian Tags"] = false
        }

        for (let key of Object.keys(plugin.settings["Defaults"])) {
            if (key === "Regex") { continue }

            const desc = defaultDescs[key as keyof typeof defaultDescs]
            const val = plugin.settings["Defaults"][key]
            const setting = new Setting(containerEl).setName(key).setDesc(desc)

            if (typeof val === "string") {
                setting.addText(text => text.setValue(val).onChange((value) => {
                    plugin.settings["Defaults"][key] = value
                    plugin.saveAllData().catch(console.error)
                }))
            } else if (typeof val === "boolean") {
                setting.addToggle(toggle => toggle.setValue(val).onChange((value) => {
                    plugin.settings["Defaults"][key] = value
                    plugin.saveAllData().catch(console.error)
                }))
            } else {
                setting.addSlider(slider => {
                    slider.setValue(val).setLimits(0, 360, 5).onChange((value) => {
                        plugin.settings["Defaults"][key] = value
                        plugin.saveAllData().then(() => {
                            if (plugin.hasOwnProperty("schedule_id")) {
                                window.clearInterval(plugin.schedule_id)
                            }
                            if (value != 0) {
                                plugin.schedule_id = window.setInterval(() => {
                                    plugin.scanVault().catch(console.error)
                                }, value * 1000 * 60)
                                plugin.registerInterval(plugin.schedule_id)
                            }
                        }).catch(console.error)
                    })
                })
            }
        }
    }

    get_folders(): TFolder[] {
        const app = (this as any).plugin.app
        let folder_list: TFolder[] = [app.vault.getRoot()]
        for (let folder of folder_list) {
            let filtered_list: TFolder[] = folder.children.filter((element: any) => element.hasOwnProperty("children")) as TFolder[]
            folder_list.push(...filtered_list)
        }
        return folder_list.slice(1)
    }

    setup_folder_field(folder: TFolder, row_cells: HTMLCollection, cell_index: number, setting_key: "FOLDER_DECKS" | "FOLDER_TAGS") {
        const plugin = (this as any).plugin
        let folder_dict = plugin.settings[setting_key]
        if (!(folder_dict.hasOwnProperty(folder.path))) {
            folder_dict[folder.path] = ""
        }
        let folder_field = new Setting(row_cells[cell_index] as HTMLElement)
            .addText(
                text => text.setValue(folder_dict[folder.path])
                .onChange((value) => {
                    plugin.settings[setting_key][folder.path] = value
                    plugin.saveAllData().catch(console.error)
                })
            )
        folder_field.settingEl = row_cells[cell_index] as HTMLElement
        folder_field.infoEl.remove()
        folder_field.controlEl.className += " anki-center"
    }

    setup_folder_table() {
        let {containerEl} = this;
        const plugin = (this as any).plugin
        const folder_list = this.get_folders()

        containerEl.createEl('h3', {text: 'Folder settings'})

        this.create_collapsible("Folder Table")
        let folder_table = containerEl.createEl('table', {cls: "anki-settings-table"})
        let head = folder_table.createTHead()
        let header_row = head.insertRow()
        for (let header of ["Folder", "Folder Deck", "Folder Tags"]) {
            let th = document.createElement("th")
            th.appendChild(document.createTextNode(header))
            header_row.appendChild(th)
        }

        let main_body = folder_table.createTBody()
        if (!(plugin.settings.hasOwnProperty("FOLDER_DECKS"))) {
            plugin.settings.FOLDER_DECKS = {}
        }
        if (!(plugin.settings.hasOwnProperty("FOLDER_TAGS"))) {
            plugin.settings.FOLDER_TAGS = {}
        }

        for (let folder of folder_list) {
            let row = main_body.insertRow()
            row.insertCell()
            row.insertCell()
            row.insertCell()

            let row_cells = row.children
            row_cells[0]!.innerHTML = folder.path

            this.setup_folder_field(folder, row_cells, 1, "FOLDER_DECKS")
            this.setup_folder_field(folder, row_cells, 2, "FOLDER_TAGS")
        }

    }

    setup_clear_cache_button(name: string, desc: string, clear_action: () => void, success_msg: string) {
        const plugin = (this as any).plugin;
        void new Setting(this.containerEl)
            .setName(name)
            .setDesc(desc)
            .addButton(button => {
                button.setButtonText("Clear").setCta()
                .onClick(() => {
                    clear_action();
                    plugin.saveAllData().then(() => {
                        new Notice(success_msg);
                    }).catch(console.error);
                });
            });
    }

    setup_buttons() {
        let {containerEl} = this
        const plugin = (this as any).plugin
        containerEl.createEl('h3', {text: 'Actions'})

        void new Setting(containerEl)
            .setName("Regenerate Note Type Table")
            .setDesc("Connect to Anki to regenerate the table with new note types, or get rid of deleted note types.")
            .addButton(
                button => {
                    button.setButtonText("Regenerate").setCta()
                    .onClick(() => {
                        new Notice("Need to connect to Anki to update note types...")
                        AnkiConnect.invoke('modelNames').then((names) => {
                            plugin.note_types = names as string[]
                            plugin.regenerateSettingsRegexps()
                            return plugin.loadFieldsDict()
                        }).then((dict) => {
                            plugin.fields_dict = dict
                            if (Object.keys(plugin.fields_dict).length != plugin.note_types.length) {
                                new Notice('Need to connect to Anki to generate fields dictionary...')
                                return plugin.generateFieldsDict().then((new_dict: Record<string, string[]>) => {
                                    plugin.fields_dict = new_dict
                                    new Notice("Fields dictionary successfully generated!")
                                })
                            }
                        }).then(() => {
                            return plugin.saveAllData()
                        }).then(() => {
                            this.setup_display()
                            new Notice("Note types updated!")
                        }).catch((e) => {
                            console.error(e)
                            new Notice("Couldn't connect to Anki! Check console for details.")
                        })
                    })
                }
            )

        this.setup_clear_cache_button(
            "Clear Media Cache",
            "Clear the cached list of media filenames that have been added to Anki. The plugin will skip over adding a media file if it's added a file with the same name before, so clear this if e.g. you've updated the media file with the same name.",
            () => { plugin.added_media = [] },
            "Media Cache cleared successfully!"
        );

        this.setup_clear_cache_button(
            "Clear File Hash Cache",
            "Clear the cached dictionary of file hashes that the plugin has scanned before. The plugin will skip over a file if the file path and the hash is unaltered.",
            () => { plugin.file_hashes = {} },
            "File Hash Cache cleared successfully!"
        );
    }

    setup_ignore_files() {
        let { containerEl } = this;
        const plugin = (this as any).plugin
        containerEl.createEl('h3', { text: 'Ignored File Settings' })
        plugin.settings["IGNORED_FILE_GLOBS"] = plugin.settings.hasOwnProperty("IGNORED_FILE_GLOBS") ? plugin.settings["IGNORED_FILE_GLOBS"] : DEFAULT_IGNORED_FILE_GLOBS

        const descriptionFragment = document.createDocumentFragment();
        descriptionFragment.createEl("span", { text: "Glob patterns for files to ignore. You can add multiple patterns. One per line. Have a look at the " })
        descriptionFragment.createEl("a", { text: "README.md", href: "https://github.com/Pseudonium/Obsidian_to_Anki?tab=readme-ov-file#features" });
        descriptionFragment.createEl("span", { text: " for more information, examples and further resources." })

        void new Setting(containerEl)
            .setName("Patterns to ignore")
            .setDesc(descriptionFragment)
            .addTextArea(text => {
                text.setValue(plugin.settings.IGNORED_FILE_GLOBS.join("\n"))
                    .setPlaceholder("Examples: '**/*.excalidraw.md', 'Templates/**'")
                    .onChange((value) => {
                        let ignoreLines = value.split("\n")
                        ignoreLines = ignoreLines.filter((e: string) => e.trim() != "") //filter out empty lines and blank lines
                        plugin.settings.IGNORED_FILE_GLOBS = ignoreLines
                        plugin.saveAllData().catch(console.error)
                    })
                text.inputEl.rows = 10
                text.inputEl.cols = 30
            })
    }

    setup_display() {
        let {containerEl} = this
        containerEl.empty()
        containerEl.createEl('h2', {text: 'Obsidian_to_Anki settings'})
        containerEl.createEl('a', {text: 'For more information check the wiki', href: "https://github.com/Pseudonium/Obsidian_to_Anki/wiki"})

        this.setup_note_table()
        this.setup_folder_table()
        this.setup_syntax()
        this.setup_defaults()
        this.setup_buttons()
        this.setup_ignore_files()
    }

    display() {
        this.setup_display()
    }
}
