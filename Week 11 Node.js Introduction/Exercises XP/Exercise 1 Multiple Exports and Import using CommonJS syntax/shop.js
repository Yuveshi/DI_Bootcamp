const products = require('./products.js');

console.log(products);

const shopFunc = (name) =>{
    const product = products.find(product => product.name === name);
    if (product) {
        console.log(`Name: ${product.name}, Price: ${product.price}, Category: ${product.category}`);
    }else {
        console.log(`Product '${name}' not found`);
    }
}

shopFunc('Laptop');
shopFunc('T-shirt')