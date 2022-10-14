import {createHTMLElement, content, clearPage } from "./index";
import { menu } from "./menu";

function home() {
    
    const pageContent = document.querySelector(".main-content");
    const description = createHTMLElement("div", "description", "Serving Boston for over 50 years!");
    pageContent.appendChild(description);

    const menuButton = createHTMLElement("button", "menu-button", "Menu");
    description.appendChild(menuButton);

    menuButton.addEventListener("click", () => {
        clearPage();
        menu();
    });
    
}


export {home};