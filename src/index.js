import { header } from "./header";


const content = document.querySelector("#content");

function createHTMLElement(type, id, text) {
    const element = document.createElement(type);
    element.classList.add(id)
    element.textContent = text;
    
    return element;
}

header();

export { createHTMLElement, content };
