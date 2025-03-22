// To insert in "seeds/investigatorNotes.seed.js"
require('dotenv').config()
const mongoose = require("mongoose");

const InvestigatorNote = require("../models/InvestigatorNote.model");

const investigator_notes = require("../investigator-notes.json");

  // ... your code here
  mongoose
  .connect(process.env.MONGODB_URI)
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .then(() => {
    InvestigatorNote.create(investigator_notes)
      .then((investigator_notes) => {
        console.log("InvestigatorNotes created ->", investigator_notes);
        mongoose.connection.close();
      })
      .catch((error) => {
        console.error("Error while creating investigator_notes ->", error);
        mongoose.connection.close();
      });
  })

module.exports = investigator_notes;