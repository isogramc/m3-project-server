// routes/guest.routes.js

const router = require('express').Router();

const Guest = require('../models/Guest.model');

router.get("/guests", (req, res, next) => {
    Guest.find().then((allGuests)=> {
        res.json({guests: allGuests});
    }).catch((error)=>{
        res.status(500).json({ message: "Error while retrieving all Guests"})
    })
  });

//  POST /students  -  Creates a new student
router.post('/guests', (req, res, next) => {

  const {
    firstName,
    lastName,
    email,
    phone,
    client
  } = req.body; 

  Guest.create({ 
    firstName,
    lastName,
    email,
    phone,
    client
    })
    .then((response) => res.json(response))
    .catch((err) => {
      console.log("Error while creating the guest", err);
      res.status(500).json({ message: "Error while creating the guest" });
    });
});

router.put("/guests/:id", (req, res, next)=>{
    Guest.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((updatedGuest) => 
        res.json(updatedGuest)).catch((err) => {
      console.log("Error while updating the guest", err);
      res.status(500).json({ message: "Error while updating the guest" });
    });
})

router.delete("/guests/:id", (req, res, next)=>{
    Guest.findByIdAndDelete(req.params.id).then(() => 
        res.json({ message: "Guest deleted"})).catch((err) => {
      console.log("Error while deleting the guest", err);
      res.status(500).json({ message: "Error while deleting the guest" });
    });
})

module.exports = router;
