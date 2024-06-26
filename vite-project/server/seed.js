/* ChatGPT 4.0 June 25 2024
Prompts used were “Help me write a script to initially populate data in mongoDB database"
The generated code was adopted and added assignment 3 code for reading json file*/
// to run: node seed.js

const mongoose = require('mongoose');
const Member = require('./db/model/member');
const { readData } = require('./utils/utils');
const path = require('path');
require('dotenv').config();

// path to data/resource the following routes manage (in data folder)
const dataPath = path.join(__dirname, './data/members.json');

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

// const members = [
//   {
//     name: "Pikachu",
//     description: "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.",
//     type: "Electric",
//     weaknesses: "Ground",
//     age: 10,
//     memberImageURL: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png",
//     id: "988e0fb8-897b-48ce-97c8-c5c030897693"
//   },
//   {
//     name: "Charizard",
//     description: "If Charizard becomes truly angered, the flame at the tip of its tail burns in a light blue shade.",
//     type: "Fire, Flying",
//     weaknesses: "Water, Electric, Rock",
//     age: 8,
//     memberImageURL: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png",
//     id: "80545665-5c7a-4d28-8c3c-fd59ca911aa2"
//   },
//   {
//     name: "Espeon",
//     description: "The tip of its forked tail quivers when it is predicting its opponent’s next move.",
//     type: "Psychic",
//     weaknesses: "Bug, Ghost, Dark",
//     age: 6,
//     memberImageURL: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/196.png",
//     id: "721261a5-04e6-40ae-8bab-e64d2c738de1"
//   },
//   {
//     name: "Bulbasaur",
//     description: "For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.",
//     type: "Grass, Poison",
//     weaknesses: "Fire, Ice, Flying, Psychic",
//     age: 4,
//     memberImageURL: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
//     id: "1cf32e0e-808e-4ec2-bc3a-b96af9975739"
//   },
//   {
//     name: "Excadrill",
//     description: "Forming a drill with its steel claws and head, it can bore through a steel plate, no matter how thick it is.",
//     type: "Ground, Steel",
//     weaknesses: "Fire, Water, Fighting, Ground",
//     age: 11,
//     memberImageURL: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/530.png",
//     id: "44474e76-e7c6-4b83-9f95-cb1afe3b4c1b"
//   }
// ];

const seedDB = async () => {
  await mongoose.connect(process.env.DB_CONNECTION);

  await Member.deleteMany({}); // Clear the collection
  await Member.insertMany(members); // Insert initial data

  console.log("Database seeded successfully");
  mongoose.connection.close();
};

seedDB().catch(err => {
  console.error('Error seeding database', err);
  mongoose.connection.close();
});