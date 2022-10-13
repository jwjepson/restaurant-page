import {createHTMLElement, content} from "./index";


function home() {
    const title = createHTMLElement("div", "title", "This is a title");
    content.appendChild(title);
}

export {home};