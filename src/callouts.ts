import { ShowdownExtension } from 'showdown';

function generateCalloutHTML(type: string, fold: string, title: string, content: string): string {
    const cleanType = type.toLowerCase();
    const displayTitle = title.trim() || cleanType.charAt(0).toUpperCase() + cleanType.slice(1);
    const trimmedContent = content.trim();

    if (fold === '+' || fold === '-') {
        const openAttr = fold === '+' ? 'open' : '';
        return `<details data-callout="${cleanType}" class="callout" ${openAttr}>
    <summary class="callout-title">
        <div class="callout-icon"></div>
        <div class="callout-title-inner">${displayTitle}</div>
    </summary>
    <div class="callout-content">${trimmedContent}</div>
</details>`;
    } else {
        return `<div data-callout="${cleanType}" class="callout">
    <div class="callout-title">
        <div class="callout-icon"></div>
        <div class="callout-title-inner">${displayTitle}</div>
    </div>
    <div class="callout-content">${trimmedContent}</div>
</div>`;
    }
}

export const obsidianCallouts: ShowdownExtension[] = [
    {
        type: 'output',
        filter: function (text: string) {
            let result = text;
            const START_TAG = "<blockquote>";
            const END_TAG = "</blockquote>";

            let searchFrom = result.length;

            while (searchFrom > 0) {
                const startIndex = result.lastIndexOf(START_TAG, searchFrom);
                if (startIndex === -1) break;

                const endIndex = result.indexOf(END_TAG, startIndex);
                if (endIndex !== -1) {
                    const blockquoteContent = result.slice(startIndex + START_TAG.length, endIndex);

                    const headerRegex = /^\s*<p>\[!([a-zA-Z0-9-]+)]([+-]?)[ \t]*([\s\S]*?)(?:<br\s*\/?>\n?|<\/p>)/;
                    const calloutMatch = blockquoteContent.match(headerRegex);

                    if (calloutMatch) {
                        const type = calloutMatch[1] || "";
                        const fold = calloutMatch[2] || "";
                        const title = calloutMatch[3] || "";

                        let content = blockquoteContent.slice(calloutMatch[0].length).trim();
                        const matchedHeader = calloutMatch[0].trim();
                        if (content && !matchedHeader.endsWith("</p>")) {
                            content = `<p>${content}`;
                        }

                        const calloutHTML = generateCalloutHTML(type, fold, title, content);
                        result = result.slice(0, startIndex) + calloutHTML + result.slice(endIndex + END_TAG.length);
                    }
                }

                if (startIndex === 0) break;
                searchFrom = startIndex - 1;
            }

            return result;
        }
    }
];
