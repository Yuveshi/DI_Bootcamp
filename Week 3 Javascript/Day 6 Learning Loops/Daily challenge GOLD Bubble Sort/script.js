const numbers = [5,0,9,1,7,4,2,6,3,8];

console.log(numbers.toString());
console.log(numbers.join(" and "));
console.log("-----------------------------")

for (let i = 0; i < numbers.length; i++){
    let temp;
    for (let j = 0; j < numbers.length - i - 1; j++){
        if (numbers[j] < numbers[j+1]){
            temp = numbers[j];
            numbers[j] = numbers[j+1];
            numbers[j+1] = temp
        }
    }
}

// numbers.sort() ?

console.log(numbers.toString());