const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO: Please make sure you edit the investigatorNote model to whatever makes sense in this case
const investigatorNoteSchema = new Schema(
  {
    character: String,
    motive: String,
    clue: String,
    quote: String
  }
);

const investigatorNote = mongoose.model("InvestigatorNote", investigatorNoteSchema);

module.exports = investigatorNote;
