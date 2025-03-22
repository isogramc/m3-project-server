// To insert in "seeds/characters.seed.js"
require('dotenv').config()
const mongoose = require("mongoose");

const Character = require("../models/Character.model");

const characters = require("../characters.json");

  // ... your code here
  mongoose
  .connect(process.env.MONGO_URI)
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .then(() => {
    Character.create(characters)
      .then((characters) => {
        console.log("Characters created ->", characters);
        mongoose.connection.close();
      })
      .catch((error) => {
        console.error("Error while creating cohorts ->", error);
        mongoose.connection.close();
      });
  })

module.exports = characters;