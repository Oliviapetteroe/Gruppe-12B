
// Canvas funksjoner
const rectangle = function (left, top, width, height, mode, color) {
	const canvas = document.getElementById("canvas");
	const ctx = canvas.getContext("2d");

	ctx.fillStyle = color;
	ctx.fillRect(top, left, width, height);
};

const circle = function (centerleft, centertop, radius, mode, color) {
	const canvas = document.getElementById("canvas");
	const ctx = canvas.getContext("2d");

	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.ellipse(centertop, centerleft, radius, radius, 0, 180, 180);
	ctx.fill();
};

// SVG funksjoner

const rectangleSvg = function (left, top, width, height, color) {
	const svgDoc = document.getElementById("svg");

	const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
	rect.setAttributeNS(null, "x", left);
	rect.setAttributeNS(null, "y", top);
	rect.setAttributeNS(null, "width", width);
	rect.setAttributeNS(null, "height", height);
	rect.setAttributeNS(null, "fill", color);

	svgDoc.appendChild(rect);
};

const circleSvg = function (centerleft, centertop, radius, color) {
	const svgDoc = document.getElementById("svg");

	const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	circle.setAttributeNS(null, "cx", centerleft);
	circle.setAttributeNS(null, "cy", centertop);
	circle.setAttributeNS(null, "r", radius);
	circle.setAttributeNS(null, "fill", color);

	svgDoc.appendChild(circle);
};
