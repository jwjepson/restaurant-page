import {createHTMLElement, content} from "./index";

function home() {
    const pageContent = createHTMLElement("div", "main-content");
    content.appendChild(pageContent);

    const description = createHTMLElement("div", "description", "Serving Boston for over 50 years!");
    pageContent.appendChild(description);
}


export {home};