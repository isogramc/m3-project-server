// routes/client.routes.js

const router = require('express').Router();

const Client = require('../models/Client.model');

router.get("/clients", (req, res, next) => {
    Client.find().then((allClients)=> {
        res.json({clients: allClients});
    }).catch((error)=>{
        res.status(500).json({ message: "Error while retrieving all Clients"})
    })
  });

//  POST /students  -  Creates a new student
router.post('/clients', (req, res, next) => {

  const {
    userId,
    firstName,
    lastName,
    email,
    phone,
    addressline1,
    addressline2,
    city,
    postalCode
  } = req.body; 

  Guest.create({ 
    userId,
    firstName,
    lastName,
    email,
    phone,
    addressline1,
    addressline2,
    city,
    postalCode
    })
    .then((response) => res.json(response))
    .catch((err) => {
      console.log("Error while creating the client", err);
      res.status(500).json({ message: "Error while creating the client" });
    });
});

router.put("/clients/:id", (req, res, next)=>{
    Client.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((updatedClient) => 
        res.json(updatedClient)).catch((err) => {
      console.log("Error while updating the client", err);
      res.status(500).json({ message: "Error while updating the client" });
    });
})

router.delete("/clients/:id", (req, res, next)=>{
    Guest.findByIdAndDelete(req.params.id).then(() => 
        res.json({ message: "client deleted"})).catch((err) => {
      console.log("Error while deleting the client", err);
      res.status(500).json({ message: "Error while deleting the client" });
    });
})

module.exports = router;
