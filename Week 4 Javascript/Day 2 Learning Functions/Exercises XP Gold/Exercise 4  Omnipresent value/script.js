function isOmnipresent(list, number){
    for (let item of list) {
        if (item.includes(number) === false) {
            return false;
        }
    }
    return true;
}
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));