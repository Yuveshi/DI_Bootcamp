const fs = require('fs');
const path = require('path');

function readFile() {
    const filePath = path.join(__dirname, 'files', 'file-data.txt');

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error("Error reading the file:", err);
        } else {
            console.log("File content:", data);
        }
    });
}

module.exports = readFile;
