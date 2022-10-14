import {createHTMLElement, content} from "./index";

function about() {
    const mainContent = document.querySelector(".main-content");
    const aboutContent = createHTMLElement("div", "about", "Boston Pizzeria is a family owned business that has been serving the community for over 50 years. We offer an array of pizzas, pastas, and subs");
    mainContent.appendChild(aboutContent);
}

export {about};