var str1 = prompt("Enter string of numbers seperated by commas: ");
var nums = str1.split(",").map(Number);
var sum = 0;

for (let num of nums) {
    sum += num;
}
console.log("Sum: ", sum);
// stuck here
// how to find sum without loop
// ._.