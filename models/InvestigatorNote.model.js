const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the investigatorNote model to whatever makes sense in this case
const investigatorNoteSchema = new Schema(
  {
    name: { type: String, required: true },
  }
);

const investigatorNote = model("investigatorNote", investigatorNoteSchema);

module.exports = investigatorNote;
