import { menuRender } from "./styleSet";

function component() {
	const EddieDog = menuRender("Eddie Dog");
	const ChilliDog = menuRender("Chilli Dog");
	const CornDog = menuRender("Corn Dog");
	const Bratwurst = menuRender("Bratwurst");
	const VeganDog = menuRender("Vegan Dog");

	return { EddieDog, ChilliDog, CornDog, Bratwurst, VeganDog };
}
export { component };
