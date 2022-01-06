import "./index.css";
import { menu } from "./menu";
import { newElement } from "./styleSet";

//add title and nav bar here
const header = document.createElement("header");
const title = document.createElement("h1");
title.textContent = "Eddies Million Dollar Dogs";
const nav = document.createElement("nav");
nav.id = "nav-bar";

const menuA = document.createElement("a");
menuA.textContent = "Menu | ";
menuA.href = "";
const aboutA = document.createElement("a");
aboutA.textContent = "About Us | ";
aboutA.href = "";
const contactA = document.createElement("a");
contactA.textContent = "Contact Us";
contactA.href = "";

document.body.appendChild(header);
header.appendChild(title);
header.appendChild(nav);
nav.appendChild(menuA);
nav.appendChild(aboutA);
nav.appendChild(contactA);

const main = document.createElement("div");
main.id = "content";
document.body.appendChild(main);

function removeAllChildNodes(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

function menuRender() {
	removeAllChildNodes(main);
	const menuObject = menu();
	for (const x in menuObject) {
		main.appendChild(menuObject[x]);
	}
}
//call each module here
//menu module
menuA.addEventListener("click", () => {
	menuRender();
});
//about us module
//contact us module

//initial render
menuRender();
