// your JavaScript file

const container = document.getElementById("container");

const redParagraph = document.createElement('p');
redParagraph.textContent = "Hi I am red";
redParagraph.style.color = "red";
container.appendChild(redParagraph);

const blueH3 = document.createElement("h3");
blueH3.textContent = "Hi I'm blue h3";
blueH3.style.color = "blue";
container.appendChild(blueH3);

const div = document.createElement("div");
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm a div";
div.appendChild(h1);

const pInDiv = document.createElement("p");
pInDiv.textContent = "Me too !";
div.appendChild(pInDiv);

container.appendChild(div);