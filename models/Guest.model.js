const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO: Please make sure you edit the Guest model to whatever makes sense in this case
const guestSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    eventId: { type: Schema.Types.ObjectId, ref: "Event" },
    characterId: { type: Schema.Types.ObjectId, ref: "Character" },
  }
);

const Guest = mongoose.model("Guest", guestSchema);

module.exports = Guest;
