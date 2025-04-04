const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO: Please make sure you edit the Client model to whatever makes sense in this case
const clientSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    characterId: { type: Schema.Types.ObjectId, ref: "Character" },
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

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
