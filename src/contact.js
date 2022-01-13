import { nestedElement, newElement } from "./styleSet";

function contactUs(){
    const slogan = nestedElement("div", "div", "diamond", "aboutUs-item");
}

const heyContactUs = newElement("div", ...Array(2), "Contact Us");

export { heyContactUs, contactUs };
