function getElementWidth(content, padding, border) {
	const contentNumber = Number(content.slice(0, -2));
	const paddingNumber = Number(padding.slice(0, -2));
	const borderNumber = Number(border.slice(0, -2));

	return contentNumber + (paddingNumber * 2) +  (borderNumber * 2);
}



console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
