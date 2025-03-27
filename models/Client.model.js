const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO: Please make sure you edit the Character model to whatever makes sense in this case
const clientSchema = new Schema(
  {
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
