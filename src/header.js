import {createHTMLElement, content} from "./index";


function header() {
    const header = createHTMLElement("div", "header");
    const title = createHTMLElement("div", "title", "Boston Pizzeria");

    const nav = ["Home", "About", "Menu"];
    const ul = createHTMLElement("ul", "nav");

    nav.forEach((tab) => {
        const li = createHTMLElement("li", "nav-item", tab);
        ul.appendChild(li);
    })
    
    content.appendChild(header);
    header.appendChild(title);
    header.appendChild(ul);
}

export {header};