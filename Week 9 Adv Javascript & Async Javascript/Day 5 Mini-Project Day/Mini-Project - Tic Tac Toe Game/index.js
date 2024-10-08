const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

// problem ar zero

const availablePositions = [1,2,3,4,5,6,7,8,9];

var gameBoard = document.getElementById("gameBoard")
var turnCounter = 0;
let turnBox = document.getElementById("playerTurn")
var won = false;
var draw = false
var player = "O";
var computer = "X";

function playerChose(){
    let choiceSection = document.getElementById("playerChoice");
    let chosen = event.target.innerText;

    if (chosen == "X"){
        player = "X"
        computer = "O"
    }
    
    alert(`Player Chose ${player}`)
    gameBoard.className = "active"
    choiceSection.className = "hidden"
}

function playerTurn(){
    while (true){
        let returned = playerClick()

        if (returned == true){
            break;
        } else {
            alert("Position already chosen")
        }
    }
}

function computerTurn(){
    let positionsLeft = availablePositions.filter((value) => {if (value > -1) {return true} else {return false} });
    let likelihood = winCombos.flat().filter((value) => {if (value in positionsLeft) {return true} else {return false}}).reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1
        return acc
    })

}

function playerClick(){
    let chosenBox = Number(event.target.id);

    if (availablePositions.indexOf(chosenBox) == -1){
        return false
    } else {
        availablePositions(availablePositions.indexOf(chosenBox)) = -1;
        event.target.innerText = player;
        return true;
    }
}

function checkWin(){

}

do{
    count = count + 1
    if (count % 2 == 0) {
        turnBox.innerText = "Player's turn"
        playerTurn()
    } else {
        turnBox.innerText = "Computer's turn"
        computerTurn()
    }
} while (won == false && draw == false)