// noinspection JSIgnoredPromiseFromCall

import {PluginSettingTab, Setting, Notice, TFolder} from 'obsidian'
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
    "Add Obsidian Tags": "Interpret #tags in the fields of a note as Anki tags, removing them from the note text in Anki.",
    "Multiline YAML Tags": "Enable this to parse tags formatted as a multiline YAML list (e.g., - tag1\\n  - tag2) instead of a single line."
}

export const DEFAULT_IGNORED_FILE_GLOBS = [
    '**/*.excalidraw.md'
]

export class SettingsTab extends PluginSettingTab {
    private selectedNoteType: string = "";
    private selectedFolder: string = "";
    private folderSearchTerm: string = "";
    private noteTypeSearchTerm: string = "";

    setup_custom_regexp(note_type: string, container: HTMLElement, onUpdate?: () => void) {
        const plugin = (this as any).plugin
        let regexp_section = plugin.settings["CUSTOM_REGEXPS"]

        const custom_regexp = new Setting(container)
            .setName("Custom Regexp")
            .setDesc("Regular expression used to match this specific note type in your files.")

        custom_regexp.addTextArea(text => {
            text.setValue(regexp_section.hasOwnProperty(note_type) ? regexp_section[note_type] : "")
            text.inputEl.style.resize = "both"
            text.inputEl.style.minWidth = "250px"
            text.inputEl.style.minHeight = "40px"
            text.inputEl.rows = 2
            text.onChange(value => {
                plugin.settings["CUSTOM_REGEXPS"][note_type] = value
                plugin.saveAllData().catch(console.error)
                if (onUpdate) onUpdate();
            })
        })
    }

    setup_link_field(note_type: string, container: HTMLElement) {
        const plugin = (this as any).plugin
        let link_fields_section = plugin.settings.FILE_LINK_FIELDS

        const link_field = new Setting(container)
            .setName("File Link Field")
            .setDesc("Anki field where the Obsidian file link will be appended.")

        link_field.addDropdown(dropdown => {
            const ensureFields = async (): Promise<string[]> => {
                if (!plugin.fields_dict[note_type]) {
                    plugin.fields_dict = await plugin.loadFieldsDict()
                    if (Object.keys(plugin.fields_dict).length !== plugin.note_types.length) {
                        new Notice('Need to connect to Anki to generate fields dictionary...')
                        try {
                            plugin.fields_dict = await plugin.generateFieldsDict()
                            new Notice("Fields dictionary successfully generated!")
                        } catch (e) {
                            new Notice("Couldn't connect to Anki! Check console for error message.")
                            return []
                        }
                    }
                }
                return plugin.fields_dict[note_type] || []
            }

            void ensureFields().then(field_names => {
                for (let field of field_names) {
                    dropdown.addOption(field, field)
                }
                const defaultValue = link_fields_section.hasOwnProperty(note_type) ? link_fields_section[note_type] : (field_names[0] ?? "")
                dropdown.setValue(defaultValue)
            }).catch(console.error)

            dropdown.onChange(value => {
                plugin.settings.FILE_LINK_FIELDS[note_type] = value
                void plugin.saveAllData().catch(console.error)
            })
        })
    }

    setup_context_field(note_type: string, container: HTMLElement) {
        const plugin = (this as any).plugin
        let context_fields_section: Record<string, string> = plugin.settings.CONTEXT_FIELDS

        const context_field = new Setting(container)
            .setName("Context Field")
            .setDesc("Anki field where the note context (headings path) will be appended.")

        context_field.addDropdown(dropdown => {
            const field_names = plugin.fields_dict[note_type] || []
            for (let field of field_names) {
                dropdown.addOption(field, field)
            }
            dropdown.setValue(context_fields_section.hasOwnProperty(note_type) ? context_fields_section[note_type] : field_names[0])

            dropdown.onChange(value => {
                plugin.settings.CONTEXT_FIELDS[note_type] = value
                plugin.saveAllData().catch(console.error)
            })
        })
    }

    renderNoteTypeSettings(container: HTMLElement, onUpdate?: () => void) {
        container.replaceChildren();
        if (!this.selectedNoteType) return;

        this.setup_custom_regexp(this.selectedNoteType, container, onUpdate);
        this.setup_link_field(this.selectedNoteType, container);
        this.setup_context_field(this.selectedNoteType, container);
    }

    setup_note_types_section() {
        let {containerEl} = this;
        const plugin = (this as any).plugin

        if (!plugin.note_types || plugin.note_types.length === 0) return;

        containerEl.createEl('h3', {text: 'Note Type Settings'})

        if (!(plugin.settings.hasOwnProperty("CONTEXT_FIELDS"))) {
            plugin.settings.CONTEXT_FIELDS = {}
        }

        new Setting(containerEl)
            .setName("Search Note Types")
            .setDesc("Type to quickly filter the note types dropdown below.")
            .addSearch(search => {
                search.setPlaceholder("Find note type...")
                search.onChange(value => {
                    this.noteTypeSearchTerm = value.toLowerCase();
                    rebuildNoteTypeDropdown();
                })
            });

        const noteTypesWrapper = containerEl.createDiv();

        const rebuildNoteTypeDropdown = () => {
            noteTypesWrapper.replaceChildren();

            let filtered_types = plugin.note_types;
            if (this.noteTypeSearchTerm) {
                filtered_types = filtered_types.filter((nt: string) => nt.toLowerCase().includes(this.noteTypeSearchTerm));
            }

            if (filtered_types.length === 0) {
                noteTypesWrapper.createEl('p', {
                    text: 'No note types match your search.',
                    cls: 'text-muted'
                });
                return;
            }

            if (!this.selectedNoteType || !filtered_types.includes(this.selectedNoteType)) {
                this.selectedNoteType = filtered_types[0] || "";
            }

            const settingsContainer = noteTypesWrapper.createDiv();
            settingsContainer.style.borderLeft = "2px solid var(--text-muted)";
            settingsContainer.style.paddingLeft = "1.5em";
            settingsContainer.style.marginLeft = "0.5em";
            settingsContainer.style.marginBottom = "2em";
            settingsContainer.style.marginTop = "1em";

            const dropdownSetting = new Setting(noteTypesWrapper)
                .setName("Select Note Type")
                .setDesc("Choose a note type to configure its specific fields and regex.");

            const statusBadge = dropdownSetting.descEl.createDiv();
            statusBadge.style.marginTop = "6px";
            statusBadge.style.fontWeight = "bold";

            const updateBadge = (nt: string) => {
                const hasCustomRegex = Boolean(plugin.settings["CUSTOM_REGEXPS"][nt] && plugin.settings["CUSTOM_REGEXPS"][nt].trim() !== "");
                if (hasCustomRegex) {
                    statusBadge.setText("Active: Custom Regex configuration");
                    statusBadge.style.color = "var(--color-purple)";
                } else {
                    statusBadge.setText("Active: Default configuration");
                    statusBadge.style.color = "var(--text-muted)";
                }
            };

            dropdownSetting.addDropdown(cb => {
                for (let nt of filtered_types) {
                    const hasCustomRegex = Boolean(plugin.settings["CUSTOM_REGEXPS"][nt] && plugin.settings["CUSTOM_REGEXPS"][nt].trim() !== "");

                    let label = nt;
                    if (hasCustomRegex) {
                        label = `${nt}   🟣`;
                    }

                    cb.addOption(nt, label);
                }

                cb.setValue(this.selectedNoteType);
                cb.selectEl.style.fontWeight = "500";

                updateBadge(this.selectedNoteType);

                cb.onChange(value => {
                    this.selectedNoteType = value;
                    updateBadge(value);
                    this.renderNoteTypeSettings(settingsContainer, () => updateBadge(this.selectedNoteType));
                })
            });

            noteTypesWrapper.insertBefore(dropdownSetting.settingEl, settingsContainer);

            this.renderNoteTypeSettings(settingsContainer, () => updateBadge(this.selectedNoteType));
        };

        rebuildNoteTypeDropdown();
    }

    get_folders(): TFolder[] {
        const plugin = (this as any).plugin
        const app = plugin.app
        let folder_list: TFolder[] = [app.vault.getRoot()]

        for (let folder of folder_list) {
            let filtered_list: TFolder[] = folder.children.filter((element: any) => element.hasOwnProperty("children")) as TFolder[]
            folder_list.push(...filtered_list)
        }

        let folders = folder_list.slice(1);

        const ignored: string[] = plugin.settings.IGNORED_FOLDERS || [];
        if (ignored.length > 0) {
            folders = folders.filter(f => {
                return !ignored.some((rule: string) => {
                    const cleanRule = rule.trim().replace(/^\/+|\/+$/g, '');
                    if (!cleanRule) return false;

                    if (cleanRule.includes('/')) {
                        return f.path === cleanRule || f.path.startsWith(cleanRule + "/");
                    }

                    const segments = f.path.split('/');
                    return segments.includes(cleanRule);
                });
            });
        }

        return folders;
    }

    setup_folder_field(folder: TFolder, container: HTMLElement, setting_key: "FOLDER_DECKS" | "FOLDER_TAGS", title: string, desc: string) {
        const plugin = (this as any).plugin
        let folder_dict = plugin.settings[setting_key]
        if (!(folder_dict.hasOwnProperty(folder.path))) {
            folder_dict[folder.path] = ""
        }

        const folder_field = new Setting(container)
            .setName(title)
            .setDesc(desc)

        folder_field.addTextArea(text => {
            text.setValue(folder_dict[folder.path])
            if (setting_key === "FOLDER_DECKS") {
                text.setPlaceholder(folder.path.replace(/\//g, "::"))
            }
            text.inputEl.style.resize = "both"
            text.inputEl.style.minWidth = "250px"
            text.inputEl.style.minHeight = "40px"
            text.inputEl.rows = 2
            text.onChange(value => {
                plugin.settings[setting_key][folder.path] = value
                plugin.saveAllData().catch(console.error)
            })
        })
    }

    renderFolderSettings(container: HTMLElement) {
        container.replaceChildren();
        if (!this.selectedFolder) return;
        const folders = this.get_folders();
        const folder = folders.find(f => f.path === this.selectedFolder);
        if (!folder) return;

        this.setup_folder_field(folder, container, "FOLDER_DECKS", "Folder Deck", "Default deck for notes created in this folder.");
        this.setup_folder_field(folder, container, "FOLDER_TAGS", "Folder Tags", "Default tags applied to notes in this folder.");
    }

    setup_folders_section() {
        let {containerEl} = this;
        const plugin = (this as any).plugin

        new Setting(containerEl).setHeading().setName('Folder Settings');

        if (!(plugin.settings.hasOwnProperty("IGNORED_FOLDERS"))) {
            plugin.settings.IGNORED_FOLDERS = []
        }
        if (!(plugin.settings.hasOwnProperty("FOLDER_DECKS"))) {
            plugin.settings.FOLDER_DECKS = {}
        }
        if (!(plugin.settings.hasOwnProperty("FOLDER_TAGS"))) {
            plugin.settings.FOLDER_TAGS = {}
        }

        const ignoreFolderSetting = new Setting(containerEl)
            .setName("Folders to ignore")
            .setDesc("List folder names or paths (one per line) to exclude them and their subfolders from the dropdown below.");

        new Setting(containerEl)
            .setName("Search Folders")
            .setDesc("Type to quickly filter the folder dropdown below.")
            .addSearch(search => {
                search.setPlaceholder("Find folder...")
                search.onChange(value => {
                    this.folderSearchTerm = value.toLowerCase();
                    rebuildDropdown();
                })
            });

        const foldersWrapper = containerEl.createDiv();

        const rebuildDropdown = () => {
            foldersWrapper.replaceChildren();

            let folder_list = this.get_folders();

            if (this.folderSearchTerm) {
                folder_list = folder_list.filter(f => f.path.toLowerCase().includes(this.folderSearchTerm));
            }

            if (folder_list.length === 0) {
                foldersWrapper.createEl('p', {
                    text: this.folderSearchTerm ? 'No folders match your search.' : 'No folders available or all folders are ignored.',
                    cls: 'text-muted'
                });
                return;
            }

            if (!this.selectedFolder || !folder_list.find(f => f.path === this.selectedFolder)) {
                this.selectedFolder = folder_list[0]!.path;
            }

            const settingsContainer = foldersWrapper.createDiv();
            settingsContainer.style.borderLeft = "2px solid var(--text-muted)";
            settingsContainer.style.paddingLeft = "1.5em";
            settingsContainer.style.marginLeft = "0.5em";
            settingsContainer.style.marginBottom = "2em";
            settingsContainer.style.marginTop = "1em";

            const dropdownSetting = new Setting(foldersWrapper)
                .setName("Select Folder")
                .setDesc("Choose a folder to configure its specific default deck and tags.");

            const statusBadge = dropdownSetting.descEl.createDiv();
            statusBadge.style.marginTop = "6px";
            statusBadge.style.fontWeight = "bold";

            dropdownSetting.addDropdown(cb => {
                const folderDecks = plugin.settings.FOLDER_DECKS || {};
                const folderTags = plugin.settings.FOLDER_TAGS || {};

                for (let f of folder_list) {
                    const hasCustomDeck = Boolean(folderDecks[f.path] && folderDecks[f.path].trim() !== "");
                    const hasCustomTags = Boolean(folderTags[f.path] && folderTags[f.path].trim() !== "");

                    let label = f.path;
                    if (hasCustomDeck && hasCustomTags) {
                        label = `${f.path}   🟢[Deck & Tags]`;
                    } else if (hasCustomDeck) {
                        label = `${f.path}   🟡[Deck]`;
                    } else if (hasCustomTags) {
                        label = `${f.path}   🔵[Tags]`;
                    }

                    cb.addOption(f.path, label);
                }

                cb.setValue(this.selectedFolder);
                cb.selectEl.style.fontWeight = "500";

                const updateBadge = (folderPath: string) => {
                    const hasCustomDeck = Boolean(folderDecks[folderPath] && folderDecks[folderPath].trim() !== "");
                    const hasCustomTags = Boolean(folderTags[folderPath] && folderTags[folderPath].trim() !== "");

                    if (hasCustomDeck && hasCustomTags) {
                        statusBadge.setText("Active: Custom Deck & Tags");
                        statusBadge.style.color = "var(--color-green)";
                    } else if (hasCustomDeck) {
                        statusBadge.setText("Active: Custom Deck Only");
                        statusBadge.style.color = "var(--color-yellow)";
                    } else if (hasCustomTags) {
                        statusBadge.setText("Active: Custom Tags Only");
                        statusBadge.style.color = "var(--color-blue)";
                    } else {
                        statusBadge.setText("Active: Default Vault Settings");
                        statusBadge.style.color = "var(--text-muted)";
                    }
                };

                updateBadge(this.selectedFolder);

                cb.onChange(value => {
                    this.selectedFolder = value;
                    updateBadge(value);
                    this.renderFolderSettings(settingsContainer);
                })
            });

            foldersWrapper.insertBefore(dropdownSetting.settingEl, settingsContainer);

            this.renderFolderSettings(settingsContainer);
        };

        ignoreFolderSetting.addTextArea(text => {
            text.setValue((plugin.settings.IGNORED_FOLDERS || []).join("\n"))
            text.setPlaceholder("Examples: '_attachment', 'Templates', 'Private/Journal'")
            text.onChange(value => {
                plugin.settings.IGNORED_FOLDERS = value.split(/\r?\n/).map(e => e.trim()).filter(e => e !== "")
                plugin.saveAllData().catch(console.error)
                rebuildDropdown()
            })
        });

        if (ignoreFolderSetting.settingEl.querySelector('textarea')) {
            const textarea = ignoreFolderSetting.settingEl.querySelector('textarea') as HTMLTextAreaElement
            textarea.rows = 4
            textarea.cols = 30
        }

        rebuildDropdown();
    }

    setup_syntax() {
        let {containerEl} = this;
        const plugin = (this as any).plugin
        new Setting(containerEl).setHeading().setName('Syntax Settings')
        for (let key of Object.keys(plugin.settings["Syntax"])) {
            if (key === "Begin Note" || key === "End Note") {
                new Setting(containerEl)
                    .setName(key)
                    .addTextArea(text => {
                        text.setValue(plugin.settings["Syntax"][key])
                        text.inputEl.style.resize = "both"
                        text.onChange(value => {
                            plugin.settings["Syntax"][key] = value
                            plugin.saveAllData().catch(console.error)
                        })
                    })
            } else {
                new Setting(containerEl)
                    .setName(key)
                    .addText(text => {
                        text.setValue(plugin.settings["Syntax"][key])
                        text.onChange(value => {
                            plugin.settings["Syntax"][key] = value
                            plugin.saveAllData().catch(console.error)
                        })
                    })
            }
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
        if (!(plugin.settings["Defaults"].hasOwnProperty("Multiline YAML Tags"))) {
            plugin.settings["Defaults"]["Multiline YAML Tags"] = false
        }

        for (let key of Object.keys(plugin.settings["Defaults"])) {
            if (key === "Regex") {
                continue
            }

            const desc = defaultDescs[key as keyof typeof defaultDescs]
            const val = plugin.settings["Defaults"][key]
            const setting = new Setting(containerEl).setName(key).setDesc(desc)

            if (typeof val === "string") {
                setting.addText(text => {
                    text.setValue(val)
                    text.onChange(value => {
                        plugin.settings["Defaults"][key] = value
                        plugin.saveAllData().catch(console.error)
                    })
                })
            } else if (typeof val === "boolean") {
                setting.addToggle(toggle => {
                    toggle.setValue(val)
                    toggle.onChange(value => {
                        plugin.settings["Defaults"][key] = value
                        plugin.saveAllData().catch(console.error)
                    })
                })
            } else {
                setting.addSlider(slider => {
                    slider.setValue(val).setLimits(0, 360, 5)
                    slider.onChange(value => {
                        plugin.settings["Defaults"][key] = value
                        plugin.saveAllData().then(() => {
                            if (plugin.hasOwnProperty("schedule_id") && plugin.schedule_id) {
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

    setup_clear_cache_button(name: string, desc: string, clear_action: () => void, success_msg: string) {
        const plugin = (this as any).plugin;
        const setting = new Setting(this.containerEl).setName(name).setDesc(desc);

        setting.addButton(button => {
            button.buttonEl.addClass("mod-cta")
            return button
                .setButtonText("Clear")
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

        const regenerateSetting = new Setting(containerEl)
            .setName("Regenerate Note Type Table")
            .setDesc("Connect to Anki to regenerate the list of note types and fetch their fields, removing deleted ones.");

        regenerateSetting.addButton(button => {
            button.buttonEl.addClass("mod-cta")
            return button
                .setButtonText("Regenerate")
                .onClick(() => {
                    const action = async () => {
                        new Notice("Need to connect to Anki to update note types...")
                        try {
                            const names = await AnkiConnect.invoke('modelNames')
                            plugin.note_types = names as string[]
                            plugin.regenerateSettingsRegexps()

                            plugin.fields_dict = await plugin.loadFieldsDict()

                            if (Object.keys(plugin.fields_dict).length != plugin.note_types.length) {
                                new Notice('Need to connect to Anki to generate fields dictionary...')
                                plugin.fields_dict = await plugin.generateFieldsDict()
                                new Notice("Fields dictionary successfully generated!")
                            }

                            await plugin.saveAllData()
                            this.setup_display()
                            new Notice("Note types updated!")
                        } catch (e) {
                            console.error(e)
                            new Notice("Couldn't connect to Anki! Check console for details.")
                        }
                    };
                    action().catch(console.error);
                })
        })

        this.setup_clear_cache_button(
            "Clear Media Cache",
            "Clear the cached list of media filenames. The plugin skips adding a media file if it's been added before; clear this to force an update.",
            () => {
                plugin.added_media = []
            },
            "Media Cache cleared successfully!"
        );

        this.setup_clear_cache_button(
            "Clear File Hash Cache",
            "Clear the cached dictionary of file hashes. The plugin skips unchanged files; clear this to force a full re-scan of the vault.",
            () => {
                plugin.file_hashes = {}
            },
            "File Hash Cache cleared successfully!"
        );
    }

    setup_ignore_files() {
        let {containerEl} = this;
        const plugin = (this as any).plugin
        containerEl.createEl('h3', {text: 'Ignored File Settings'})
        plugin.settings["IGNORED_FILE_GLOBS"] = plugin.settings.hasOwnProperty("IGNORED_FILE_GLOBS") ? plugin.settings["IGNORED_FILE_GLOBS"] : DEFAULT_IGNORED_FILE_GLOBS

        const descriptionFragment = document.createDocumentFragment();
        descriptionFragment.createEl("span", {text: "Glob patterns for files to ignore. You can add multiple patterns. One per line. Have a look at the "})
        descriptionFragment.createEl("a", {
            text: "README.md",
            href: "https://github.com/Pseudonium/Obsidian_to_Anki?tab=readme-ov-file#features"
        });
        descriptionFragment.createEl("span", {text: " for more information, examples and further resources."})

        const ignoreSetting = new Setting(containerEl)
            .setName("Patterns to ignore")
            .setDesc(descriptionFragment);

        ignoreSetting.addTextArea(text => {
            text.setValue(plugin.settings.IGNORED_FILE_GLOBS.join("\n"))
            text.setPlaceholder("Examples: '**/*.excalidraw.md', 'Templates/**'")
            text.onChange(value => {
                plugin.settings.IGNORED_FILE_GLOBS = value.split("\n").filter((e: string) => e.trim() != "")
                plugin.saveAllData().catch(console.error)
            })
        })

        if (ignoreSetting.settingEl.querySelector('textarea')) {
            const textarea = ignoreSetting.settingEl.querySelector('textarea') as HTMLTextAreaElement
            textarea.rows = 4
            textarea.cols = 30
        }
    }

    setup_ignored_metadata() {
        let {containerEl} = this;
        const plugin = (this as any).plugin

        new Setting(containerEl).setHeading().setName('Ignored Metadata Artifacts')

        if (!(plugin.settings.hasOwnProperty("IGNORED_METADATA_REGEXPS"))) {
            plugin.settings["IGNORED_METADATA_REGEXPS"] = [
                "^(?:[a-zA-Z]*:|-->)",
                "^——————————>",
                "^<——————————$"
            ]
        }

        const setting = new Setting(containerEl)
            .setName("Metadata Cleanup Regular Expressions")
            .setDesc("List regular expression patterns (one per line) to remove metadata artifacts from notes before formatting.");

        setting.addTextArea(text => {
            text.setValue(plugin.settings["IGNORED_METADATA_REGEXPS"].join("\n"))
            text.setPlaceholder("Example: ^(?:[a-zA-Z]*:|-->)")
            text.inputEl.style.resize = "both"
            text.inputEl.style.minWidth = "250px"
            text.inputEl.style.minHeight = "80px"
            text.inputEl.rows = 4
            text.onChange(value => {
                plugin.settings["IGNORED_METADATA_REGEXPS"] = value.split(/\r?\n/).map(e => e.trim()).filter(e => e !== "")
                plugin.saveAllData().catch(console.error)
            })
        })
    }

    setup_display() {
        let {containerEl} = this
        containerEl.replaceChildren()

        const headerDiv = containerEl.createDiv({cls: 'setting-item setting-item-heading'})
        const headerInfo = headerDiv.createDiv({cls: 'setting-item-info'})
        headerInfo.createDiv({cls: 'setting-item-name', text: 'Obsidian to Anki settings'})

        const linkEl = headerInfo.createEl('a', {text: 'For more information check the wiki'})
        linkEl.href = "https://github.com/Pseudonium/Obsidian_to_Anki/wiki"
        linkEl.target = "_blank"
        linkEl.rel = "noopener noreferrer"

        this.setup_note_types_section()
        this.setup_folders_section()
        this.setup_syntax()
        this.setup_defaults()
        this.setup_buttons()
        this.setup_ignore_files()
        this.setup_ignored_metadata()
    }

    display() {
        this.setup_display()
    }
}
