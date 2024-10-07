function capitalise(line, even){
    let output = "";
    if (even == true) {
        for (let char in line) {
            if (char % 2 == 0) {
                output += line[char].toUpperCase();
            } else {
                output += line[char];
            }
        }
    } else {
        for (let char in line) {
            if (char % 2 != 0) {
                output += line[char].toUpperCase();
            } else {
                output += line[char];
            }
        }
    }
    
    return output;
}

console.log(capitalise("abcdef", true));
console.log(capitalise("abcdef", false))