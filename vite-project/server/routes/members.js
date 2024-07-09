/* ChatGPT 4.0 June 13 2024
Prompts used were “Help me get started writing a GET members list and POST a member request in express from data as json"
The generated code was adopted with some renaming and adapted for initializeMembers*/

var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');
const Member = require('../db/model/member');


// sets up a route to handle GET requests to the '/members' endpoint
// the callback function is executed when this endpoint is hit
// GET list of members
router.get('/', async (req, res) => {
    try {
        const members = await Member.find();
        return res.send(members);
    } catch (err) {
        return res.status(500).send('Internal Error: ' + err.message);
    }
  });

// POST a new member
router.post('/', async (req, res) => {
    const newMember = new Member({ id: uuidv4(), ...req.body });
    try {
      await newMember.save();
      return res.status(201).send(newMember);
    } catch (err) {
        return res.status(500).send('Error: ' + err.message);
    }
  });

// DELETE a member
router.delete('/:id', async (req, res) => {
    try {
        const memberId = req.params.id;
        const result = await Member.deleteOne({ id: memberId });
        if (result.deletedCount === 0) {
            return res.status(404).send('Member not found');
      }
      return res.status(204).send();
    } catch (err) {
        return res.status(500).send('Internal Error: ' + err.message);
    }
  });

// PUT (edit) member
router.put('/:id', async (req, res) => {
    try {
        const memberId = req.params.id;
        const updatedMember = await Member.findOneAndUpdate(
        { id: memberId },
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedMember) {
        return res.status(404).send('Member not found');
      }
      return res.status(200).send(updatedMember);
    } catch (err) {
        return res.status(500).send('Error: ' + err.message);
    }
  });


module.exports = router;