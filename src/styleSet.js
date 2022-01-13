function nestedElement(parentElement, childElement, parentClassName = "", childClassName = "", ID = "", childTxtContent = "") {
	const parentDiv = document.createElement(parentElement);
	parentDiv.classList.add(`${parentClassName}`);
	const childDiv = document.createElement(childElement);
	childDiv.classList.add(`${childClassName}`);
	childDiv.id = ID;
	childDiv.textContent = childTxtContent;

	parentDiv.appendChild(childDiv);

	return parentDiv;
}

function newElement(element, className = "", ID = "", elementTextContent = "", href = "", src = "") {
	const el = document.createElement(element);
	className && el.classList.add(className);
	el.id = ID;
	el.textContent = elementTextContent;
	if (element == "a") {
		// el.href = href;
	}
	if (element == "img") {
		el.src = src;
	}

	return el;
}

export { nestedElement, newElement };
