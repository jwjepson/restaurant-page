import { header } from "./header";
import { home } from "./home";


const content = document.querySelector("#content");

function createHTMLElement(type, id, text) {
    const element = document.createElement(type);
    element.classList.add(id)
    element.textContent = text;
    
    return element;
}

header();
home();

export { createHTMLElement, content };
