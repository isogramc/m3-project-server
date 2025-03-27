const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO: Please make sure you edit the Character model to whatever makes sense in this case
const eventSchema = new Schema(
  {
    name: { type: String, required: true },
    numberOfGuests: number,
    guestList: String,
    time: new Date("<YYYY-mm-ddTHH:MM:ss>"),
    location: String, 
    eventType: {type: String, enum: ["Wedding", "Birthday", "Corporate", "Other"]}, 
    dressCode: String,
    budget: number,
    menu: {type: String, enum: ["Buffet", "Plated", "Cocktail", "Other"]}
  }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
