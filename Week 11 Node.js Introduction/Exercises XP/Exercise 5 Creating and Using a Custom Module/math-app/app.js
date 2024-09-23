// app.js
const _ = require('lodash');  // Import lodash
const { add, multiply } = require('../math'); // Import custom math module

console.log('Sum:', add(5, 3));            // 8
console.log('Product:', multiply(5, 3));   // 15
console.log('Max:', _.max([1, 2, 3, 4]));  // 4
