const list_corrector_module = ({
        type: 'output',
        filter: function filter(text) {

            const regex = new RegExp(`<li>[ \t\r\f]*<p>((?:.|\n)*?)<\/p>`, "mg");
            return text.replace(regex,'<li>$1');

        }
    })

export default list_corrector_module;