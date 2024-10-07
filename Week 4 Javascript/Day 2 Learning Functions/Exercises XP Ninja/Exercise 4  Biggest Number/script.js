function biggestNumberInArray(arrayNumber) {
    let newArray = arrayNumber.filter(onlyNums)
    if ((arrayNumber.length == 0) || (newArray.length == 0)) {
        return 0;
    } else {
        return Math.max.apply(null, newArray);
    }
}

function onlyNums(value) {
    return !(isNaN(value));
}

console.log(biggestNumberInArray([-1,0,3,100, 99, 2, 99, "a"]));