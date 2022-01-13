import { nestedElement, newElement } from "./styleSet";

function aboutUs() {
	let sloganDescription =
		"Lorem Ipsum Tempor dolor consectetur incididunt qui ex. Et amet enim eiusmod adipisicing laboris adipisicing et consectetur deserunt laborum aliqua nostrud nisi laboris. Dolore ut pariatur sunt dolore ipsum officia Lorem exercitation aliqua culpa sint exercitation officia.";

	let locationDescription = "2014 Forest Hills Drive, Fayetteville, North Carolina 28301";

	const slogan = nestedElement("div", "div", "diamond", "aboutUs-item");
	const hours = nestedElement("div", "div", "diamond", "aboutUs-item");
	const location = nestedElement("div", "div", "diamond", "aboutUs-item");

	const itemTitle1 = newElement("h3", "item-title", ...Array(1), "Who Are We");
	const itemTitle2 = newElement("h3", "item-title", ...Array(1), "Hours of Operation");
	const itemTitle3 = newElement("h3", "item-title", ...Array(1), "Location");

	const monday = newElement("p", "week-days", ...Array(1), "Monday: 6am - 6pm");
	const tuesday = newElement("p", "week-days", ...Array(1), "Tuesday: 6am - 6pm");
	const wednesday = newElement("p", "week-days", ...Array(1), "Wednesday: 6am - 6pm");
	const thursday = newElement("p", "week-days", ...Array(1), "Thursday: 6am - 10pm");
	const friday = newElement("p", "week-days", ...Array(1), "Friday: 6am - 10pm");
	const saturday = newElement("p", "week-days", ...Array(1), "Saturday: 8am - 10pm");
	const sunday = newElement("p", "week-days", ...Array(1), "Sunday: 8am - 8pm");

	const itemDescription1 = newElement("p", "item-Description", ...Array(1), sloganDescription);
	const itemDescription2 = newElement("p", "item-Description", ...Array(1));
	const itemDescription3 = newElement("p", "item-Description", "address", locationDescription);

	slogan.childNodes[0].appendChild(itemTitle1);
	hours.childNodes[0].appendChild(itemTitle2);
	location.childNodes[0].appendChild(itemTitle3);

	hours.childNodes[0].appendChild(monday);
	hours.childNodes[0].appendChild(tuesday);
	hours.childNodes[0].appendChild(wednesday);
	hours.childNodes[0].appendChild(thursday);
	hours.childNodes[0].appendChild(friday);
	hours.childNodes[0].appendChild(saturday);
	hours.childNodes[0].appendChild(sunday);

	slogan.childNodes[0].appendChild(itemDescription1);
	hours.childNodes[0].appendChild(itemDescription2);
	location.childNodes[0].appendChild(itemDescription3);

	return { slogan, hours, location };
}


export { aboutUs };
