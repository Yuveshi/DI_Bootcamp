// shop.js
const products = require('./products'); // Import products

// Function to find product by name
function findProductByName(productName) {
    return products.find(product => product.name === productName);
}

// Test the function
console.log(findProductByName('Laptop'));  // Should print Laptop details
console.log(findProductByName('Shoes'));   // Should print Shoes details
