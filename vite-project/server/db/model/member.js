/* June 25 2024
Referenced mongoDB developer docs for the below code
https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/#what-is-mongoose-*/

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// create schema
const memberSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  weaknesses: { type: String, required: true },
  age: {
    type: Number,
    required: true,
    min: [1, 'Age must be greater than 1']
  },
  memberImageURL: { type: String, required: true },
  id: {
    type: String,
    required: true,
    unique: true
  }
});

// create model
const Member = model('Member', memberSchema);

module.exports = Member;