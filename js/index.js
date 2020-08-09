/* eslint-disable no-undef */
const buttons = document.querySelectorAll(".btn");
const images = document.querySelectorAll("img");
const h2Elements = document.querySelectorAll("h2");
const aElelemnts = document.querySelectorAll("a");
const pElements = document.querySelectorAll("p");
const h4Elements = document.querySelectorAll("h4");

/*
	This event listener will make all of the h2 elements text-align css property to be "center"
*/

document.addEventListener("keydown", (e) => {
	if (e.keyCode === 67) {
		h2Elements.forEach((h2) => (h2.style.textAlign = "center"));
	}
});

// All class with the with the className of button will have there background color turn to black if dobule clicked.
buttons.forEach((button) => {
	button.addEventListener("dblclick", (e) => {
		e.target.style.background = "black";
	});
});

const midColors = () => {
	const randomVal = Math.floor(Math.random() * 255);
	if (randomVal < 80) {
		return 80;
	} else if (randomVal > 200) {
		return 200;
	} else {
		return randomVal;
	}
};

const createRandomColor = () =>
	`rgba(${midColors()}, ${midColors()}, ${midColors()}, 1)`;

const changeBorderColor = (e) =>
	(e.target.style.borderColor = createRandomColor());

images.forEach((image) => {
	image.addEventListener("click", (e) => {
		e.target.style.border = "10px solid rgba(0, 0, 0, 1)";
	});

	image.addEventListener("mouseenter", (e) => changeBorderColor(e));
	image.addEventListener("mouseleave", (e) => changeBorderColor(e));
	image.addEventListener("load", (e) => console.log("Image loaded", e));
});

aElelemnts.forEach((a) => {
	a.addEventListener("focus", (e) => {
		e.target.style.color = "green";
		e.target.style.fontSize = "2.5rem";
	});
	a.addEventListener("blur", (e) => {
		e.target.style.color = "black";
		e.target.style.fontSize = "1.6rem";
	});
});

pElements.forEach((p) => {
	p.addEventListener("wheel", (e) => {
		e.target.style.color = createRandomColor();
	});

	p.addEventListener("drag", (e) => (e.target.style.fontSize = "2rem"));
});

// Stretch Goals
const BigAndPurpleH4 = () =>
	gsap.to("h4", {
		color: "purple",
		fontSize: "5rem",
		textAlign: "center",
		duration: 3,
	});

h4Elements.forEach((h4) => h4.addEventListener("click", BigAndPurpleH4));
