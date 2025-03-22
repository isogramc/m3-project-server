const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the Character model to whatever makes sense in this case
const characterSchema = new Schema(
  {
    name: { type: String, required: true },
  }
);

const Character = model("character", characterSchema);

module.exports = Character;
