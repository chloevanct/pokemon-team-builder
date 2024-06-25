/* ChatGPT 4.0 June 13 2024
Prompts used were “Write me a script to generate UUIDs for each member"
The generated code was adopted with some renaming*/


const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const dataPath = path.join(__dirname, 'data/members.json');

// Read the existing members data
fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading data:', err);
        return;
    }

    // Parse the data
    let members = JSON.parse(data);

    // Add UUID to each member if it doesn't already have an id
    members = members.map(member => {
        if (!member.id) {
            member.id = uuidv4();
        }
        return member;
    });

    // Write the updated data back to the file
    fs.writeFile(dataPath, JSON.stringify(members, null, 2), 'utf8', (err) => {
        if (err) {
            console.error('Error writing data:', err);
            return;
        }
        console.log('UUIDs have been added to members.json');
    });
});