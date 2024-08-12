debugger
let button = document.querySelector("button")
console.log(button)
let attempts = 1;
let randomNumber = getRandomNumber()

function playTheGame() {
    attempts =1;
    let confirmation = confirm("Would you like to play?")
    if (!confirmation) {
        alert("No problem, Goodbye")
    } else {
        console.log("Loading...");
        chooseANumber();
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}


function chooseANumber() {
    let selection = prompt("Choose a number between 0 and 10")
    if (isNaN(selection) || selection > 10) {
        alert("Sorry please select again")
        chooseANumber();
    } else {
        selection = Number(selection)
        console.log("User's selection:", selection);
        console.log("Computer's number:", randomNumber);
        attempts++;
        compareNumbers(selection, randomNumber)

    }
}

function checkAttempts() {
    console.log('attempts', attempts)
    if (attempts >= 3) {
        alert("Sorry, no more chances! Play again ;)")
        console.log("Game Over")
    } else {
        chooseANumber();
    }
}


function compareNumbers(selection, computerNumber) {
    if (selection === computerNumber) {
        alert("Winner, you won!")
        console.log("They won, end of game")
        return //to stop game
    } else if (selection > computerNumber) {
        alert("Your number is higher than the computer's, guess again")
        let newSelection = prompt("Choose again betwen 0 and 10")
        console.log("User's selection:", newSelection);
        console.log("Computer's number:", randomNumber);
        checkAttempts()
    } else {
        alert("Your number is lower than the computer's, guess again")
        let newSelection = prompt("Choose again betwen 0 and 10")
        console.log("User's selection:", newSelection);
        console.log("Computer's number:", randomNumber);
        checkAttempts()
    }
}


// playTheGame()



///This was unnecessary code
// if (isNaN(newSelection) || newSelection > 10) {
//     alert("Sory please select again")
// } else if (newSelection < computerNumber) {
//     alert("Your number is lower than the computer number, guess again")
//     newSelection = prompt("Choose a number between 0 and 10")
// }
// else {
//     newSelection = Number(newSelection)
//     let computerNumber = getRandomNumber()
//     console.log("User's selection:", newSelection);
//     console.log("Computer's number:", computerNumber);
// }