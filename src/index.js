import "./index.css";
import { component } from "./menu";

//add title and nav bar here
const header = document.createElement("header");
const title = document.createElement("h1");
title.textContent = "Eddies Million Dollar Dogs";
const nav = document.createElement("nav");
nav.id = "nav-bar";

const menuA = document.createElement("a");
menuA.textContent = "Menu |";
const aboutA = document.createElement("a");
aboutA.textContent = " About Us |";
const contactA = document.createElement("a");
contactA.textContent = " Contact Us";


document.body.appendChild(header);
header.appendChild(title);
header.appendChild(nav);
nav.appendChild(menuA);
nav.appendChild(aboutA);
nav.appendChild(contactA);

const main = document.createElement("div");
main.id = "content";
document.body.appendChild(main);


//call each module here
//menu module
const menuObject = component();
for (const x in menuObject) {
	main.appendChild(menuObject[x]);
}

//about us module
//contact us module

console.log("it works");
