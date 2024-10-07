console.log("Player 1 chooses the word");
console.log("----------------------------")
let word = "";
do {
    word = prompt("Enter the word to be guessed (8 letters minimum) : ")
    if (word.length < 8) {
        console.log("Minimum length should be 8. Enter again");
    }
} while (word.length < 8);

let hidden = "";
for (let letter of word) {
    hidden = hidden + "*"
}

console.clear();

console.log("Player 2's turn");
console.log("----------------------------");

 let chances = 0;
 let guesses = [];
 do {
     chances = chances +1;
    console.log("Word: ", hidden);
    if (chances > 1) {
        console.log("Guesses: ", guesses.join(", "))
    }
    let guess = ""
    do {
        guess = prompt("Enter a guess: ")
    } while (guesses.includes(guess) == true)
    guesses.push(guess);
    
    for (let letter in word) {
        if (word[letter] == guess){
            let characters = hidden.split("");
            characters[letter] = guess
            hidden = characters.join("")
        }
    }
    
    if (hidden == word) {
        console.log("Winner");
        break;
    }
 } while (chances <= 10)
 
 if (chances >= 10) {
     console.log("You lose")
 }