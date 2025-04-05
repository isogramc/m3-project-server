const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO: Please make sure you edit the Character model to whatever makes sense in this case
const eventPlannerSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    image: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    adressline1: String,
    addressline2: String,
    city: String,   
    postalCode: String,
  }
);

const EventPlanner = mongoose.model("Event Planner", eventPlannerSchema);

module.exports = EventPlanner;
