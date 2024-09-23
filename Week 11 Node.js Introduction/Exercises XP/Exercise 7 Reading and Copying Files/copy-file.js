// copy-file.js
const fs = require('fs');
const path = require('path');

// Paths to the source and destination files
const sourcePath = path.join(__dirname, 'source.txt');
const destinationPath = path.join(__dirname, 'destination.txt');

// Read the content from source.txt and write it to destination.txt
fs.readFile(sourcePath, 'utf8', (err, data) => {
    if (err) {
        return console.error('Error reading the source file:', err);
    }

    fs.writeFile(destinationPath, data, (err) => {
        if (err) {
            return console.error('Error writing to the destination file:', err);
        }
        console.log('File copied successfully!');
    });
});
