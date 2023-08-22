const htmlTagsDictionary = {
    // Basic Structure
    'html': 'Defines the beginning of an HTML document.',
    'head': 'Contains metadata information for the document.',
    'title': 'Defines the title of the document displayed in the browser tab or title bar.',
    'body': 'Contains the visible content of the document.',

    // Text
    'p': 'Defines a paragraph of text.',
    'h1': 'Defines headings of different levels.',
    'h2': 'Defines headings of different levels.',
    'h3': 'Defines headings of different levels.',
    'h4': 'Defines headings of different levels.',
    'h5': 'Defines headings of different levels.',
    'h6': 'Defines headings of different levels.',
    'a': 'Creates a link to another page or resource.',
    'strong': 'Defines important text with strong emphasis.',
    'em': 'Defines emphasized text, usually displayed in italics.',
    'span': 'Defines a small section of text.',

    // Lists
    'ul': 'Creates an unordered list.',
    'ol': 'Creates an ordered list.',
    'li': 'Defines a list item in ordered or unordered lists.',

    // Definitions
    'dl': 'Creates a definition list.',
    'dt': 'Defines a term or item in the definition list.',
    'dd': 'Defines the description of a term in the definition list.',

    // Images and Media
    'img': 'Displays an image.',
    'audio': 'Embeds an audio file.',
    'video': 'Embeds a video file.',

    // Forms and Inputs
    'form': 'Creates a form for data input.',
    'input': 'Creates a data input field.',
    'textarea': 'Creates a multiline text area.',
    'button': 'Creates a clickable button.',
    'select': 'Creates a dropdown list of options.',
    'option': 'Defines an option in a dropdown list.',

    // Tables
    'table': 'Creates a table.',
    'tr': 'Defines a row in a table.',
    'td': 'Defines a data cell in a table.',
    'th': 'Defines a header cell in a table.',

    // Structural Components
    'header': 'Defines the header of the page or section.',
    'nav': 'Defines a navigation block.',
    'section': 'Defines a section within the document.',
    'article': 'Defines independent content, such as a blog post.',
    'aside': 'Defines related content, often displayed in sidebars.',
    'footer': 'Defines the footer of the page or section.',
    'div': 'Defines a generic division or section.',
    'main': 'Defines the main content of the page.',

    // Embedded Media
    'iframe': 'Embeds another document within the page.',
    'canvas': 'Creates an area for drawable graphics using JavaScript.',
    'svg': 'Creates scalable vector graphics.',

    // External Resources
    'link': 'Defines the relationship between a document and an external resource, like a stylesheet.',
    'script': 'Defines an inline script or a link to an external script.',
    'meta': 'Provides metadata about the document, such as descriptions and keywords.',
};


function getTags() {
    tags = document.querySelectorAll("*");

    formattedTags = [];

    tags.forEach(tag => {
        tag = tag.localName;
        if (tag.includes(".")) {
            tag = tag.split(".")[0]
        }
        if (tag.includes("#")) {
            tag = tag.split("#")[0]
        }

        if (!formattedTags.includes(tag)) {
            formattedTags.push(tag)
        }
    });

    console.log(formattedTags);
    return formattedTags;
}

function renderTags(tags) {
    let listHTML = "<ul>";
    for (const tag of tags) {
        listHTML += `<li class="tagItem"><h3>${tag}:</h3><p>${htmlTagsDictionary[tag]}</p></li>`;
    }
    listHTML += "</ul>";

    return listHTML;
}
