import { menuRender } from "./styleSet";

function component() {
	const EddieDog = menuRender("Eddie Dog");
	const ChilliDog = menuRender("Chilli Dog");
	const CornDog = menuRender("Corn Dog");
	const Bratwurst = menuRender("Bratwurst");
	const VeganDog = menuRender("Vegan Dog");

	// <div class="diamond">
	// 			<div class="menu-item">Eddie Dog</div>
	// 		</div>
	// 		<div class="diamond">
	// 			<div class="menu-item">Chilli Dog</div>
	// 		</div>
	// 		<div class="diamond">
	// 			<div class="menu-item">Corn Dog</div>
	// 		</div>
	// 		<div class="diamond">
	// 			<div class="menu-item">Bratwurst</div>
	// 		</div>
	// 		<div class="diamond">
	// 			<div class="menu-item">Vegan Dog</div>
	// 		</div>

	return { EddieDog, ChilliDog, CornDog, Bratwurst, VeganDog };
}
export { component };
