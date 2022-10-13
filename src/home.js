function home() {
    const content = document.querySelector("#content");
    const test = document.createElement("p");
    test.classList.add("testing");
    test.textContent = "This is a test";
    
    content.appendChild(test);
}

export {home};