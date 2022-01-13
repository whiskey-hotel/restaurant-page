import "./index.css";
import { menu } from "./menu";
import { aboutUs } from "./aboutUs";
import { heyContactUs } from "./contact";
import { pageRender } from "./render";

//initial render
pageRender.moduleRender(menu())

//menu module
pageRender.menuA.addEventListener("click", function () {
	pageRender.moduleRender(menu());
});
//about us module
pageRender.aboutA.addEventListener("click", function () {
	pageRender.moduleRender(aboutUs());
});
//contact us module
pageRender.contactA.addEventListener("click", function () {
	pageRender.moduleRender(heyContactUs)
});
