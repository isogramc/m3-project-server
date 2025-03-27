const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO: Please make sure you edit the storyReveal model to whatever makes sense in this case
const storyRevealSchema = new Schema(
  {
    event: { type: Schema.Types.ObjectId, ref: "Event" },
    character: { type: Schema.Types.ObjectId, ref: "Character" },
    plotpoint: String,
    expectedAction: String,
    time: new Date("<YYYY-mm-ddTHH:MM:ss>")
  }
);

const storyReveal = mongoose.model("Story Reveal", storyRevealSchema);

module.exports = storyReveal;
