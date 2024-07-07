let divEl = document.querySelector(".content");
let paragraph = document.querySelector("p");
let btnEl = document.querySelector("button");

btnEl.addEventListener("click", () => {
let newText = prompt("Enter your text");
paragraph.innerHTML = newText;

})

