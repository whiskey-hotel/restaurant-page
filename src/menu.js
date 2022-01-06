import { nestedElement } from "./styleSet";

function menu() {
	const EddieDog = nestedElement("div", "div", "diamond", "menu-item", "Eddie Dog");
	const ChilliDog = nestedElement("div", "div", "diamond", "menu-item", "Chilli Dog");
	const CornDog = nestedElement("div", "div", "diamond", "menu-item", "Corn Dog");
	const Bratwurst = nestedElement("div", "div", "diamond", "menu-item", "Bratwurst");
	const VeganDog = nestedElement("div", "div", "diamond", "menu-item", "Vegan Dog");

	return { EddieDog, ChilliDog, CornDog, Bratwurst, VeganDog };
}
export { menu };
