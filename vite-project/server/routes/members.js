/* ChatGPT 4.0 June 13 2024
Prompts used were “Help me get started writing a GET members list and POST a member request in express from data as json"
The generated code was adopted with some renaming*/

var express = require('express');
var router = express.Router();
const path = require('path');
const { readData, writeData } = require('../utils/utils');

const dataPath = path.join(__dirname, '../data/members.json');

// sets up a route to handle GET requests to the '/members' endpoint
// the callback function is executed when this endpoint is hit
// GET list of members
router.get('/', (req, res) => {
    readData((dataPath, err, data) => {
        if (err) {
            return res.status(500).send('Internal Error: Error reading data');
        }
        return res.send(data);
    });
});

// POST a new member
router.post('/', (req, res) => {
    readData((dataPath,err, data) => {
        if (err) {
            return res.status(500).send('Internal Error: Error reading data');
        }
        const newMember = { id: Date.now(), ...req.body };
        data.push(newMember);
        writeData(dataPath, data, (err) => {
            if (err) {
                return res.status(500).send('Internal Error: Error writing data');
            }
            return res.status(201).send(newMember);
        });
    });
});

// DELETE a member
router.delete('/:id', (req, res) => {
    readData((dataPath, err, data) => {
        if (err) {
            return res.status(500).send('Internal Error: Error reading data');
        }

        const memberId = parseInt(req.params.id, 10);
        const updatedData = data.filter(member => member.id !== memberId);
        writeData(dataPath, updatedData, (err) => {
            if (err) {
                return res.status(500).send('Internal Error: Error writing data');
            }
            return res.status(204).send();
        })
    })
})

// PUT (edit) member
router.put('/:id', (req, res) => {
    readData((dataPath, err, data) => {
        if (err) {
            return res.status(500).send('Error reading data');
        }
        const memberId = parseInt(req.params.id, 10);
        const memberIndex = data.findIndex(member => member.id === memberId);
        if (memberIndex === -1) {
            return res.status(404).send('Member not found');
        }
        // Update the member details
        const updatedMember = { ...data[memberIndex], ...req.body };
        const updatedData = data.map(member => (member.id === memberId ? updatedMember : member));
        writeData(dataPath, updatedData, (err) => {
            if (err) {
                return res.status(500).send('Error writing data');
            }
            return res.status(200).send(updatedMember);
        });
    });
});

module.exports = router;