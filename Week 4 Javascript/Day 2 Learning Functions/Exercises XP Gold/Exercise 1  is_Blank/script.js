function Is_Blank(line) {
    if ((line == "")) {
        return true;
    } else {
        return false;
    }
}

console.log(Is_Blank(""));
console.log(Is_Blank(" "));
console.log(Is_Blank("a")); 