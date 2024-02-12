const userWords = prompt("Please enter several words and seperate them using comma")
let array = userWords.split(", ")
let longestWord = 0

for (word of array){
    if(word.length > longestWord){
        longestWord = word.length;
    }
}
longestWord = longestWord+4
array = array.map(word => {
    let totalPadding = longestWord - word.length - 4; 
    let startPadding = Math.floor(totalPadding / 2);
    let endPadding = totalPadding - startPadding;
    return `* ${" ".repeat(startPadding)}${word}${" ".repeat(endPadding)} *`;
});
let stars = "*".repeat(longestWord);
let output = `${stars}\n${array.join('\n')}\n${stars}`;
console.log(output)