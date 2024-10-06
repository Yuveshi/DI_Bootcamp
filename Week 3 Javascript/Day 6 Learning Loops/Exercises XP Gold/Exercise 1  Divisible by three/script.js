let numbers = [123, 8409, 100053, 333333333, 7];

var divisible = true;
for (num of numbers){
    if (num % 3 == 0) {
         divisibile = true;
    } else {
         divisible = false;
    }
    console.log(`is ${num} divisible by 3? ${divisible}`);
}