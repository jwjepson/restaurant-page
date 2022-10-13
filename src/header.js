import {createHTMLElement, content} from "./index";


function header() {
    const header = createHTMLElement("div", "header");
    const title = createHTMLElement("div", "title", "Boston Pizzeria");
    content.appendChild(header);
    header.appendChild(title);
}

export {header};