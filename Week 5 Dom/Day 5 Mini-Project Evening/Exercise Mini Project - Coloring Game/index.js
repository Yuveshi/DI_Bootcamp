generatorColors();
let currentColor
listenToMain()
let isMousePressed = false
const button = document.querySelector(".clear button");
listenToClearButton()

function listenToClearButton() {
    button.addEventListener("click", clearCanvas)
}

function clearCanvas() {
    currentColor = null
    const squares = document.querySelectorAll("#main > div");
    for (const square of squares) {
        square.style.backgroundColor = "white";
    }
button.style.backgroundColor = "currentColor";
}
function listenToMain() {
    const main = document.getElementById("main");
    main.addEventListener("mousedown", handleclick)
    main.addEventListener("mousemove", handleMove)
    document.body.addEventListener("mouseup", handleMouseRelease)

}
    function handleMouseRelease() {
        isMousePressed = false
        
    }

function handleclick() {
    if (currentColor == null) return
        isMousePressed = true
    }


function handleMove(e) {
    if (!isMousePressed) return
    const hoveredDiv = document.elementFromPoint(e.x, e.y)
    hoveredDiv.style.backgroundColor = "currentColor"
   
    }

function generatorColors() {
    const colorDivs = document.querySelectorAll(".color");
    for (const colorDiv of colorDivs) {
        const randomColor = generatorRandomColor();
        colorDiv.style.backgroundColor = randomColor;
        colorDiv.dataset.color = randomColor;
        colorDiv .addEventListener("click", setCurrentColor) 

    }
}

function generatorRandomColor() {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + hex;
}

function setCurrentColor(e) {
    const chosenColor = e.target.dataset.color;
    currentColor = chosenColor
    const button = document.querySelector(".clear button");
    button.style.backgroundColor = currentColor;
}

