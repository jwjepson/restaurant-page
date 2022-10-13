import {createHTMLElement, content} from "./index";

function menu() {
    const mainContent = document.querySelector(".main-content");
    const menu = createHTMLElement("div", "menu", "Menu");
    mainContent.appendChild(menu);

    const categories = ["pizza", "pasta", "subs", "salads"];
    categories.forEach((category) => {
        const heading = createHTMLElement("div", `${category}-category`, category);
        menu.appendChild(heading);
    });

    const pizzaCategory = document.querySelector(".pizza-category");

}
export {menu};