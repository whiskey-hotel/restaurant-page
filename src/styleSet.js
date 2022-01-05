function menuRender(menuItem) {
	const diamond = document.createElement("div");
	diamond.classList.add("diamond");
	const tmp = document.createElement("div");
	tmp.classList.add("menu-item");
	tmp.textContent = menuItem;

	diamond.appendChild(tmp);

	return diamond;
}

export { menuRender };
