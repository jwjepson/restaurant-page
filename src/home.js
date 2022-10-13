import {createHTMLElement, content} from "./index";

function home() {
    const pageContent = createHTMLElement("div", "main-content");
    content.appendChild(pageContent);

    const description = createHTMLElement("div", "description", "Serving Boston for over 50 years!");
    pageContent.appendChild(description);

    const menuButton = createHTMLElement("button", "menu-button", "Menu");
    description.appendChild(menuButton);
}


export {home};