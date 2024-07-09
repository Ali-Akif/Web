// your JavaScript file

const container = document.querySelector("#container");

const redParagraph = document.createElement("p");
redParagraph.textContent = "Hey I'm red!";
redParagraph.style.color = "red";
container.appendChild(redParagraph);

const blueh3 = document.createElement("h3");
blueh3.textContent = "Hi I'm blue h3!";
blueh3.style.color = "blue";
container.appendChild(blueh3);

const div = document.createElement("div");
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";

const h1InDiv = document.createElement("h1");
h1InDiv.textContent = "I'm a div";
div.appendChild(h1InDiv);

const pInDiv = document.createElement("p");
pInDiv.textContent = "Me too !";
div.appendChild(pInDiv);

container.appendChild(div);