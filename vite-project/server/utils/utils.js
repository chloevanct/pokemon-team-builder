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

// Helper to write data
const writeData = (dataPath, data, callback) => {
    fs.writeFile(dataPath, JSON.stringify(data, null, 2), 'utf8', (err) => {
        callback(err);
    });
};

module.exports = {
    readData,
    writeData
};

module.exports = { readData, writeData };