/* ChatGPT 4.0 June 13 2024
Prompts used were “How do I read from JSON file and write data to a JSON file, how to use writeFile"
The generated code was adopted*/

const fs = require('fs');
const path = require('path');

// Helper to read data
const readData = (dataPath, callback) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, JSON.parse(data));
    });
};

module.exports = { readData };