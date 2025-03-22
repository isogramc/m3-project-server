const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO: Please make sure you edit the Character model to whatever makes sense in this case
const characterSchema = new Schema(
  {
    name: { type: String, required: true },
    role: String,
    backstory: {type: String, required: true}
  }
);

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
