// Instructions
// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.

// Follow these steps :

// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()

// Make sure the values are not empty
// Write a story that uses each of the values.

// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

let form = document.querySelector("form");
let button = document.querySelector("button");
let inputs = document.querySelectorAll("input");
let story = document.querySelector("#story");

const getValues = () => {
    let values = [];
    inputs.forEach(input => {
        let trimmedValue = input.value.trim();
        if (trimmedValue) {
            values.push(trimmedValue);
        }
    })
    return values;
}

const createStory = () => {
    let values = getValues();
    if (values.length === 5) {
        story.innerText = `Once upon a time, ${values[2]} wanted to ${values[3]} a ${values[1]} ${values[0]} at ${values[4]}.`;
    } else {
        story.innerText = "Please fill out all fields";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    createStory();
})

let shuffle = document.createElement("button");
shuffle.innerText = "Shuffle";

shuffle.addEventListener("click", () => {
    let values = getValues();
    if (values.length === 5) {
        values.sort(() => Math.random() - 0.5);
        story.innerText = `Once upon a time, ${values[2]} wanted to ${values[3]} a ${values[1]} ${values[0]} at ${values[4]}.`;
    } else {
        story.innerText = "Please fill out all fields";
    }
})

document.body.appendChild(shuffle);