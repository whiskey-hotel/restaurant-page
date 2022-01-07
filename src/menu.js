import { nestedElement, newElement } from "./styleSet";
import EddieDogPhoto from "./images/eddie-dog.jpeg";
import ChilliDogPhoto from "./images/chilli-dog.jpeg";
import CornDogPhoto from "./images/corndog.jpeg";
import BratwurstPhoto from "./images/bratwurst.jpeg";
import VeganDogPhoto from "./images/vegan-dog.jpeg";

function menu() {
	const EddieDog = nestedElement("div", "div", "diamond", "menu-item", "eddie-dog");
	const ChilliDog = nestedElement("div", "div", "diamond", "menu-item", "chilli-dog");
	const CornDog = nestedElement("div", "div", "diamond", "menu-item", "corn-dog");
	const Bratwurst = nestedElement("div", "div", "diamond", "menu-item", "bratwurst");
	const VeganDog = nestedElement("div", "div", "diamond", "menu-item", "vegan-dog");

	const itemTitle1 = newElement("h3", "item-title", ...Array(1), "Eddie Dog");
	const itemTitle2 = newElement("h3", "item-title", ...Array(1), "Chilli Dog");
	const itemTitle3 = newElement("h3", "item-title", ...Array(1), "Corn Dog");
	const itemTitle4 = newElement("h3", "item-title", ...Array(1), "Bratwurst");
	const itemTitle5 = newElement("h3", "item-title", ...Array(1), "Vegan Dog");

	const itemPhoto1 = new Image();
	const itemPhoto2 = new Image();
	const itemPhoto3 = new Image();
	const itemPhoto4 = new Image();
	const itemPhoto5 = new Image();

	itemPhoto1.src = EddieDogPhoto;
	itemPhoto2.src = ChilliDogPhoto;
	itemPhoto3.src = CornDogPhoto;
	itemPhoto4.src = BratwurstPhoto;
	itemPhoto5.src = VeganDogPhoto;

	const itemDescription1 = newElement("p", "item-Description", ...Array(1), "Lorem ipsum...");
	const itemDescription2 = newElement("p", "item-Description", ...Array(1), "Lorem ipsum...");
	const itemDescription3 = newElement("p", "item-Description", ...Array(1), "Lorem ipsum...");
	const itemDescription4 = newElement("p", "item-Description", ...Array(1), "Lorem ipsum...");
	const itemDescription5 = newElement("p", "item-Description", ...Array(1), "Lorem ipsum...");

	EddieDog.childNodes[0].appendChild(itemTitle1);
	ChilliDog.childNodes[0].appendChild(itemTitle2);
	CornDog.childNodes[0].appendChild(itemTitle3);
	Bratwurst.childNodes[0].appendChild(itemTitle4);
	VeganDog.childNodes[0].appendChild(itemTitle5);

	EddieDog.childNodes[0].appendChild(itemPhoto1);
	ChilliDog.childNodes[0].appendChild(itemPhoto2);
	CornDog.childNodes[0].appendChild(itemPhoto3);
	Bratwurst.childNodes[0].appendChild(itemPhoto4);
	VeganDog.childNodes[0].appendChild(itemPhoto5);

	EddieDog.childNodes[0].appendChild(itemDescription1);
	ChilliDog.childNodes[0].appendChild(itemDescription2);
	CornDog.childNodes[0].appendChild(itemDescription3);
	Bratwurst.childNodes[0].appendChild(itemDescription4);
	VeganDog.childNodes[0].appendChild(itemDescription5);

	return { EddieDog, ChilliDog, CornDog, Bratwurst, VeganDog };
}
export { menu };
