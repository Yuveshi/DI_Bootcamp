var age1 = Number(prompt("Enter first age: "));
var age2 = Number(prompt("Enter second age: "));
var diff = Math.abs(age1 - age2);
var halfAge = 0;
if (age1 > age2){
     halfAge = age1 + diff
}
else {
     halfAge = age2 + diff
}
console.log(`Half age: ${halfAge}`);