// app.js

const { readFile, writeFile } = require('./fileManager.js'); // Import functions from fileManager.js

// Read the content of "Hello World.txt"
let fileContent = readFile('Hello World.txt');
console.log(`Content of "Hello World.txt": ${fileContent}`);

// Write to "Bye World.txt" with new content
writeFile('Bye World.txt', 'Writing to the file');

console.log(`Content has been written to "Bye World.txt".`);

// Verify the content of "Bye World.txt"
let newFileContent = readFile('Bye World.txt');
console.log(`New content of "Bye World.txt": ${newFileContent}`);
