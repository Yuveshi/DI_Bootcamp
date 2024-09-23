// read-directory.js
const fs = require('fs');
const path = require('path');

// Specify the directory to read (current directory)
const directoryPath = __dirname;

// Read the list of files in the specified directory
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.error('Error reading directory:', err);
    }

    console.log('Files in directory:');
    files.forEach(file => {
        console.log(file);
    });
});
