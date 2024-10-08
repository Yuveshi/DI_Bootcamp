function allTruthy(...args) {
    // The every() method checks if all elements meet the condition of being truthy.
    return args.every(Boolean);
}

// Test cases
console.log(allTruthy(true, true, true)); 
// ➞ true

console.log(allTruthy(true, false, true)); 
// ➞ false

console.log(allTruthy(5, 4, 3, 2, 1, 0)); 
// ➞ false
