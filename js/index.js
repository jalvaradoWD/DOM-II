// Your code goes here
const images = document.querySelectorAll("img");

images.forEach((element) => {
	element.addEventListener("mousedown", (selfElement) => {
		selfElement.target.style.border = "5px solid black";
	});

	element.addEventListener("mouseup", (selfElement) => {
		selfElement.target.style.border = "none";
	});
});
