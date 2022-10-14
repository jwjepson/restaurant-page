import { header } from "./header";
import { home } from "./home";
import { about } from "./about";
import { menu } from "./menu";


const content = document.querySelector("#content");

function createHTMLElement(type, id, text) {
    const element = document.createElement(type);
    element.classList.add(id)
    element.textContent = text;
    
    return element;
}

function clearPage() {
    const mainContent = document.querySelector(".main-content")
    mainContent.innerHTML = "";
}

header();
home();

const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
    item.addEventListener("click", () => {
        if (item.textContent == "About") {
            clearPage();
            about();
        }
        else if (item.textContent == "Menu") {
            clearPage();
            menu();
        }
        else {
            clearPage();
            home();
        }
    });
});

export { createHTMLElement, content, clearPage };
