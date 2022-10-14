import {createHTMLElement, content} from "./index";

function menu() {
    const mainContent = document.querySelector(".main-content");
    const menu = createHTMLElement("div", "menu", "Menu");
    mainContent.appendChild(menu);

    const categories = ["Pizza", "Pasta", "Subs"];
    categories.forEach((category) => {
        const cat = createHTMLElement("div", `${category}-category`);
        const heading = createHTMLElement("h2", "heading", category);
        cat.appendChild(heading);
        menu.appendChild(cat);
    });

    const pizzaCategory = document.querySelector(".Pizza-category");
    const pastaCategory = document.querySelector(".Pasta-category");
    const subCategory = document.querySelector(".Subs-category");

    const pizzas = {
        "Cheese Pizza": "$12.50",
        "Pepperoni Pizza": "$13.10"
    };

    for (const pizza in pizzas) {
        const item = createHTMLElement("div", "item");
        const name = createHTMLElement("div", "name", pizza);
        const price = createHTMLElement("div", "price", pizzas[pizza]);
        item.appendChild(name);
        item.appendChild(price);
        pizzaCategory.appendChild(item);
    }

    const pastas = {
        "Chicken Alfredo": "$8.60",
        "Pasta Primavera": "$11.50",
        "Chicken Carbonara": "$12.10"
    }

    for (const pasta in pastas) {
        const item = createHTMLElement("div", "item");
        const name = createHTMLElement("div", "name", pasta);
        const price = createHTMLElement("div", "price", pastas[pasta]);
        item.appendChild(name);
        item.appendChild(price);
        pastaCategory.appendChild(item);
    }

    const subs = {
        "Buffalo Chicken": "$7.50",
        "Philly Cheese Steak": "$8.90",
    }

    for (const sub in subs) {
        const item = createHTMLElement("div", "item");
        const name = createHTMLElement("div", "name", sub);
        const price = createHTMLElement("div", "price", subs[sub]);
        item.appendChild(name);
        item.appendChild(price);
        subCategory.appendChild(item);
    }
}
export {menu};