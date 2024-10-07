function swapCase(input) {
    let output = ""
    for (let letter of input) {
        if (letter.toUpperCase() != letter) {
            output = output + letter.toUpperCase()
        } else {
            output = output + letter.toLowerCase()
        }
    }
    
    return output;
}
console.log(swapCase("The Quick Brown Fox"));