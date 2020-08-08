const buttons = document.querySelectorAll(".btn");
const images = document.querySelectorAll("img");



buttons.forEach(button => {
    button.addEventListener("dblclick", e => {
        e.target.style.background = "black"
    })
})

const midColors = () => {
    const randomVal = Math.floor(Math.random() * 255);
    if (randomVal < 80) {
        return 80
    } else if (randomVal > 200) {
        return 200
    } else {
        return randomVal
    }
}

const changeBorderColor = e => e.target.style.borderColor = `rgba(${midColors()}, ${midColors()}, ${midColors()}, 1)`

images.forEach(image => {
    image.addEventListener("click", e => {
        e.target.style.border = "10px solid rgba(0, 0, 0, 1)"
    })

    image.addEventListener("mouseenter", e => changeBorderColor(e))
    image.addEventListener("mouseleave", e => changeBorderColor(e))
})
