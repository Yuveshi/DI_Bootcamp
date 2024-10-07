function unique(myArray) {
    return [...(new Set(myArray))];
}
console.log(unique([1,1,2,2]));