import { newElement, nestedElement } from "./styleSet";

const pageRender = (() => {
	const header = newElement("header");
	const title = newElement("h1", ...Array(2), "Eddies Million Dollar Dogs");
	const nav = newElement("nav", ...Array(1), "nav-bar");
	const menuA = nestedElement("div", "a", "nav-item-div", "nav-item", ...Array(1), "Menu");
	const aboutA = nestedElement("div", "a", "nav-item-div", "nav-item", ...Array(1), "About Us");
	const contactA = nestedElement("div", "a", "nav-item-div", "nav-item", ...Array(1), "Contact Us");
	const main = newElement("div", ...Array(1), "content");

	document.body.appendChild(header);
	header.appendChild(title);
	header.appendChild(nav);
	nav.appendChild(menuA);
	nav.appendChild(aboutA);
	nav.appendChild(contactA);
	document.body.appendChild(main);

	function removeAllChildNodes(parent) {
		while (parent.firstChild) {
			parent.removeChild(parent.firstChild);
		}
	}

	function moduleRender(obj) {
		removeAllChildNodes(main);
		for (let x in obj) {
			main.appendChild(obj[x]);
		}
	}
	return { moduleRender, menuA, aboutA, contactA };
})();

export { pageRender };
