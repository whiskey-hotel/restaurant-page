function nestedElement(parentElement, childElement, parentClassName = "", childClassName = "", childTxtContent = "") {
	const parentDiv = document.createElement(parentElement);
	parentDiv.classList.add(`${parentClassName}`);
	const childDiv = document.createElement(childElement);
	childDiv.classList.add(`${childClassName}`);
	childDiv.textContent = childTxtContent;

	parentDiv.appendChild(childDiv);

	return parentDiv;
}

function newElement(){

}

export { nestedElement, newElement };
