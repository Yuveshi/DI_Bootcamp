function allEven(num) {
    console.log("All even numbers from 0 to", num)
    for (let i = 0; i <= num; i++){
        if (i % 2 == 0) {
            console.log(i);
        }
    }
    return null
}

num = Number(prompt("Enter a number from 1 to 100: "));
allEven(num);