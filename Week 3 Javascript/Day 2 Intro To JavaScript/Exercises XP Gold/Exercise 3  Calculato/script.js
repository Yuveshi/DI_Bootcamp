let num1 = prompt("Enter the first number:");
num1 = parseFloat(num1); // Convert the input to a number

let num2 = prompt("Enter the second number:");
num2 = parseFloat(num2); // Convert the input to a number

let operation = prompt("Choose an operation: +, -, *, /"); // Ask the user to choose an operation
let result;

if (operation === "+") {
  result = num1 + num2;
} else if (operation === "-") {
  result = num1 - num2;
} else if (operation === "*") {
  result = num1 * num2;
} else if (operation === "/") {
  if (num2 !== 0) {
    result = num1 / num2;
  } else {
    alert("Cannot divide by zero!");
    result = "undefined";
  }
} else {
  result = "Invalid operation!";
}

alert("The result is: " + result); // Show the result of the operation
