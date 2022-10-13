import {createHTMLElement, content} from "./index";

function menu() {
    const mainContent = document.querySelector(".main-content");
    const menu = createHTMLElement("div", "menu", "Menu");

    mainContent.appendChild(menu);
}

export {menu};