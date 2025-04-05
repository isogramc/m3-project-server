const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO: The number of guests is a parameter required to choose a venue, catering, and other services.
const eventSchema = new Schema(
  {
    clientId: { type: Schema.Types.ObjectId, ref: "Client" },
    eventPlannerId: { type: Schema.Types.ObjectId, ref: "EventPlanner" },
    name: { type: String, required: true },
    numberOfGuests: number,
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
