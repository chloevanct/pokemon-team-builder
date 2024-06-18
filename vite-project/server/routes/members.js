/* ChatGPT 4.0 June 13 2024
Prompts used were “Help me get started writing a GET members list and POST a member request in express from data as json"
The generated code was adopted with some renaming and adapted for initializeMembers*/

var express = require('express');
var router = express.Router();
const path = require('path');
const { readData } = require('../utils/utils');
const { v4: uuidv4 } = require('uuid');

// path to data/resource the following routes manage (in data folder)
const dataPath = path.join(__dirname, '../data/members.json');

let members = null;

const initializeMembers = () => {
    readData(dataPath, (err, data) => {
        if (err) {
            console.error('Error reading original members data', err);
            return;
        }
        members = data;
    });
};

initializeMembers();

// sets up a route to handle GET requests to the '/members' endpoint
// the callback function is executed when this endpoint is hit
// GET list of members
router.get('/', (req, res) => {
    if (!members) {
        return res.status(500).send('Internal Error: Members data not initialized');
    }
    return res.send(members);
});

// POST a new member
router.post('/', (req, res) => {
    const newMember = { id: uuidv4(), ...req.body };
    members.push(newMember);
    return res.status(201).send(newMember);
});

// DELETE a member
router.delete('/:id', (req, res) => {
    const memberId = req.params.id;
    const updatedData = members.filter(member => member.id !== memberId);
    if (updatedData.length === members.length) {
        return res.status(404).send('Member not found');
    }
    members = updatedData;
    return res.status(204).send();
});

// PUT (edit) member
router.put('/:id', (req, res) => {
    const memberId = req.params.id;
    const memberIndex = members.findIndex(member => member.id === memberId);
    if (memberIndex === -1) {
        return res.status(404).send('Member not found');
    }
    const updatedMember = { ...members[memberIndex], ...req.body };
    members[memberIndex] = updatedMember;
    return res.status(200).send(updatedMember);
});

module.exports = router;