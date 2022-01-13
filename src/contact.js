import { nestedElement, newElement } from "./styleSet";

function contactUs() {
	const justin = nestedElement("div", "div", "diamond", "contactUs-item");
	const eddie = nestedElement("div", "div", "diamond", "contactUs-item");
	const db = nestedElement("div", "div", "diamond", "contactUs-item");
	const frankie = nestedElement("div", "div", "diamond", "contactUs-item");

	const itemName1 = newElement("h3", "item-title", ...Array(1), "Justin Thornton");
	const itemName2 = newElement("h3", "item-title", ...Array(1), "Eddie Ogden");
	const itemName3 = newElement("h3", "item-title", ...Array(1), "D.B.");
	const itemName4 = newElement("h3", "item-title", ...Array(1), "Frankie");

	const itemPosition1 = newElement("h4", "position", ...Array(1), "CEO");
	const itemPosition2 = newElement("h4", "position", ...Array(1), "COO");
	const itemPosition3 = newElement("h4", "position", ...Array(1), "Regional Manager - East");
	const itemPosition4 = newElement("h4", "position", ...Array(1), "Regional Manager - West");

	const itemPhone1 = newElement("p", "phone", ...Array(1), "123-456-7891");
	const itemPhone2 = newElement("p", "phone", ...Array(1), "123-456-7892");
	const itemPhone3 = newElement("p", "phone", ...Array(1), "123-456-7893");
	const itemPhone4 = newElement("p", "phone", ...Array(1), "123-456-7894");

	const itemEmail1 = newElement("p", "email", ...Array(1), "justin@eddiedog.org");
	const itemEmail2 = newElement("p", "email", ...Array(1), "eddie.og@eddiedog.org");
	const itemEmail3 = newElement("p", "email", ...Array(1), "db@eddiedog.org");
	const itemEmail4 = newElement("p", "email", ...Array(1), "frank@eddiedog.org");

	justin.childNodes[0].appendChild(itemName1);
	eddie.childNodes[0].appendChild(itemName2);
	db.childNodes[0].appendChild(itemName3);
	frankie.childNodes[0].appendChild(itemName4);

	justin.childNodes[0].appendChild(itemPosition1);
	eddie.childNodes[0].appendChild(itemPosition2);
	db.childNodes[0].appendChild(itemPosition3);
	frankie.childNodes[0].appendChild(itemPosition4);

	justin.childNodes[0].appendChild(itemPhone1);
	eddie.childNodes[0].appendChild(itemPhone2);
	db.childNodes[0].appendChild(itemPhone3);
	frankie.childNodes[0].appendChild(itemPhone4);

	justin.childNodes[0].appendChild(itemEmail1);
	eddie.childNodes[0].appendChild(itemEmail2);
	db.childNodes[0].appendChild(itemEmail3);
	frankie.childNodes[0].appendChild(itemEmail4);

	return { justin, eddie, db, frankie };
}

export { contactUs };
