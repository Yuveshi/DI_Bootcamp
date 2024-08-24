// fileManager.js

const fs = require('fs');

// Function to read a file
const readFile = (filename) => {
  return fs.readFileSync(filename, 'utf8'); // Reads the file synchronously and returns its content
};

// Function to write to a file
const writeFile = (filename, content) => {
  fs.writeFileSync(filename, content); // Writes content to the file synchronously
  console.log(`File was saved to ${filename}`);
  return filename;
};

// Export the functions using CommonJS syntax
module.exports = {
  readFile,
  writeFile,
};
