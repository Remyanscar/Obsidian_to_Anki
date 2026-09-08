import {Notice, Plugin, addIcon, TFile, TFolder} from 'obsidian'
import * as AnkiConnect from './anki'
import {PluginSettings, ParsedSettings} from './interfaces/settings-interface'
import {DEFAULT_IGNORED_FILE_GLOBS, SettingsTab} from './settings'
import {ANKI_ICON} from './constants'
import {settingToData} from './setting-to-data'
import {FileManager} from './files-manager'

// noinspection JSUnusedGlobalSymbols
export default class MyPlugin extends Plugin {

    settings!: PluginSettings
    note_types!: Array<string>
    fields_dict!: Record<string, string[]>
    added_media!: string[]
    file_hashes!: Record<string, string>
    schedule_id?: number

    async getDefaultSettings(): Promise<PluginSettings> {
        let settings: PluginSettings = {
            CUSTOM_REGEXPS: {},
            FILE_LINK_FIELDS: {},
            CONTEXT_FIELDS: {},
            FOLDER_DECKS: {},
            FOLDER_TAGS: {},
            Syntax: {
                "Begin Note": "START",
                "End Note": "END",
                "Begin Inline Note": "STARTI",
                "End Inline Note": "ENDI",
                "Target Deck Line": "TARGET DECK",
                "File Tags Line": "FILE TAGS",
                "Delete Note Line": "DELETE",
                "Frozen Fields Line": "FROZEN"
            },
            Defaults: {
                "Scan Directory": "",
                "Tag": "Obsidian_to_Anki",
                "Deck": "Default",
                "Scheduling Interval": 0,
                "Add File Link": false,
                "Add Context": false,
                "CurlyCloze": false,
                "CurlyCloze - Highlights to Clozes": false,
                "ID Comments": true,
                "Add Obsidian Tags": false,
            },
            IGNORED_FILE_GLOBS: DEFAULT_IGNORED_FILE_GLOBS,
            IGNORED_FOLDERS: [],
            IGNORED_METADATA_REGEXPS: [
                "^(?:[a-zA-Z]*:|-->)",
                "^——————————>",
                "^<——————————$"
            ],
        }

        /*Making settings from scratch, so need note types*/
        this.note_types = await AnkiConnect.invoke('modelNames') as Array<string>
        this.fields_dict = await this.generateFieldsDict()

        for (let note_type of this.note_types) {
            settings["CUSTOM_REGEXPS"][note_type] = ""
            this.fields_dict[note_type] = await AnkiConnect.invoke(
                'modelFieldNames',
                {modelName: note_type}
            ) as string[]
            settings["FILE_LINK_FIELDS"][note_type] = this.fields_dict[note_type]![0] || ""
        }

        return settings
    }

    async generateFieldsDict(): Promise<Record<string, string[]>> {
        let fields_dict: Record<string, string[]> = {}
        for (let note_type of this.note_types) {
            fields_dict[note_type] = await AnkiConnect.invoke(
                'modelFieldNames',
                {modelName: note_type}
            ) as string[]
        }
        return fields_dict
    }

    async saveDefault(): Promise<void> {
        const default_sets = await this.getDefaultSettings()
        await this.saveData({
            settings: default_sets,
            "Added Media": [],
            "File Hashes": {},
            fields_dict: {}
        })
    }

    async loadSettings(): Promise<PluginSettings> {
        let current_data = await this.loadData()
        if (current_data == null || Object.keys(current_data).length != 4) {
            new Notice("Need to connect to Anki generate default settings...")
            const default_sets = await this.getDefaultSettings()
            await this.saveData({
                settings: default_sets,
                "Added Media": [],
                "File Hashes": {},
                fields_dict: {}
            })
            new Notice("Default settings successfully generated!")
            return default_sets
        } else {
            return current_data.settings
        }
    }

    async loadAddedMedia(): Promise<string[]> {
        let current_data = await this.loadData()
        if (current_data == null) {
            await this.saveDefault()
            return []
        } else {
            return current_data["Added Media"]
        }
    }

    async loadFileHashes(): Promise<Record<string, string>> {
        let current_data = await this.loadData()
        if (current_data == null) {
            await this.saveDefault()
            return {}
        } else {
            return current_data["File Hashes"]
        }
    }

    async loadFieldsDict(): Promise<Record<string, string[]>> {
        let current_data = await this.loadData()
        if (current_data == null) {
            await this.saveDefault()
            return await this.generateFieldsDict()
        } else {
            return current_data.fields_dict
        }
    }

    async saveAllData(): Promise<void> {
        await this.saveData({
            settings: this.settings,
            "Added Media": this.added_media,
            "File Hashes": this.file_hashes,
            fields_dict: this.fields_dict
        })
    }

    // noinspection JSUnusedGlobalSymbols
    regenerateSettingsRegexps() {
        let regexp_section = this.settings["CUSTOM_REGEXPS"]
        // For new note types
        for (let note_type of this.note_types) {
            this.settings["CUSTOM_REGEXPS"][note_type] = regexp_section.hasOwnProperty(note_type) ? (regexp_section[note_type] || "") : ""
        }
        // Removing old note types
        for (let note_type of Object.keys(this.settings["CUSTOM_REGEXPS"])) {
            if (!this.note_types.includes(note_type)) {
                delete this.settings["CUSTOM_REGEXPS"][note_type]
            }
        }
    }

    getAllTFilesInFolder(tfolder: TFolder): TFile[] {
        const allTFiles: TFile[] = [];

        if (!(tfolder instanceof TFolder)) {
            return allTFiles;
        }

        tfolder.children.forEach((child) => {
            if (child instanceof TFile) {
                allTFiles.push(child);
            } else if (child instanceof TFolder) {
                allTFiles.push(...this.getAllTFilesInFolder(child));
            }
        });

        return allTFiles;
    }

    async scanVault() {
        new Notice('Scanning vault, check console for details...');
        console.info("Checking connection to Anki...")
        try {
            await AnkiConnect.invoke('modelNames')
        } catch (e) {
            new Notice("Error, couldn't connect to Anki! Check console for error message.")
            return
        }

        new Notice("Successfully connected to Anki! This could take a few minutes - please don't close Anki until the plugin is finished")
        const data: ParsedSettings = await settingToData(this.app, this.settings, this.fields_dict)
        data.ignored_metadata_regexps = this.settings.IGNORED_METADATA_REGEXPS || []
        const scanDir = this.app.vault.getAbstractFileByPath(this.settings.Defaults["Scan Directory"])

        let manager = null;
        if (scanDir !== null) {
            let markdownFiles: TFile[] = [];
            if (scanDir instanceof TFolder) {
                console.info("Using custom scan directory: " + scanDir.path)
                markdownFiles = this.getAllTFilesInFolder(scanDir);
            } else {
                new Notice("Error: incorrect path for scan directory " + this.settings.Defaults["Scan Directory"])
                return
            }
            manager = new FileManager(this.app, data, markdownFiles, this.file_hashes, this.added_media)
        } else {
            manager = new FileManager(this.app, data, this.app.vault.getMarkdownFiles(), this.file_hashes, this.added_media);
        }

        await manager.initialiseFiles()
        await manager.requests_1()
        this.added_media = Array.from(manager.added_media_set)

        const hashes = manager.getHashes()
        for (let key in hashes) {
            this.file_hashes[key] = hashes[key] || ""
        }
        new Notice("All done! Saving file hashes and added media now...")
        await this.saveAllData()
    }

    async onload() {
        console.log('loading Obsidian_to_Anki...');

        addIcon('anki', ANKI_ICON)

        try {
            this.settings = await this.loadSettings()
        } catch (e) {
            new Notice("Couldn't connect to Anki! Check console for error message.")
            return
        }

        this.note_types = Object.keys(this.settings["CUSTOM_REGEXPS"])
        this.fields_dict = await this.loadFieldsDict()

        if (Object.keys(this.fields_dict).length == 0) {
            new Notice('Need to connect to Anki to generate fields dictionary...')
            try {
                this.fields_dict = await this.generateFieldsDict()
                new Notice("Fields dictionary successfully generated!")
            } catch (e) {
                new Notice("Couldn't connect to Anki! Check console for error message.")
                return
            }
        }

        this.added_media = await this.loadAddedMedia()
        this.file_hashes = await this.loadFileHashes()

        this.addSettingTab(new SettingsTab(this.app, this));

        this.addRibbonIcon('anki', 'Obsidian_to_Anki - Scan Vault', async () => {
            await this.scanVault()
        });

        this.addCommand({
            id: 'anki-scan-vault',
            name: 'Scan Vault',
            callback: async () => {
                await this.scanVault()
            }
        });
    }

    async onunload() {
        if (this.schedule_id) window.clearInterval(this.schedule_id);
        console.log("Saving settings for Obsidian_to_Anki...")
        await this.saveAllData()
        console.log('unloading Obsidian_to_Anki...');
    }
}
