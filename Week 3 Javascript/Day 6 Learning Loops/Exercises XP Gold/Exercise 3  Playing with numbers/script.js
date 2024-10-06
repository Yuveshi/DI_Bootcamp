let age = [20,5,12,43,98,55];

var sum = 0;
var highest = -1

for (let a of age){
    sum = sum + a;
    
    if (a > highest){
        highest = a;
    }
}
console.log("sum of ages:", sum);
console.log("highest age: ",highest)