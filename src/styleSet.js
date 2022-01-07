function nestedElement(parentElement, childElement, parentClassName = "", childClassName = "", childTxtContent = "") {
	const parentDiv = document.createElement(parentElement);
	parentDiv.classList.add(`${parentClassName}`);
	const childDiv = document.createElement(childElement);
	childDiv.classList.add(`${childClassName}`);
	childDiv.textContent = childTxtContent;

	parentDiv.appendChild(childDiv);

	return parentDiv;
}

function newElement(element, className = "", ID = "", elementTextContent = "", href = "") {
	const el = document.createElement(element);
	className && el.classList.add(className);
	el.id = ID;
	el.textContent = elementTextContent;
	if (element == "a") {
		// el.href = href;
	}

	return el;
}

export { nestedElement, newElement };
