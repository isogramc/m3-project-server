// routes/event.routes.js

const router = require('express').Router();

const Event = require('../models/Event.model');

router.get("/events", (req, res, next) => {
    Event.find().then((allEvents)=> {
        res.json({guests: allEvents});
    }).catch((error)=>{
        res.status(500).json({ message: "Error while retrieving all Events"})
    })
  });

//  POST /events  -  Creates a new event
router.post('/events', (req, res, next) => {

  const {
    name,
    numberOfGuests,
    guestList,
    date,
    time,
    location, 
    eventType, 
    dressCode,
    budget,
    menu
  } = req.body; 

  Event.create({ 
    name,
    numberOfGuests,
    guestList,
    date,
    time,
    location, 
    eventType, 
    dressCode,
    budget,
    menu
    })
    .then((response) => res.json(response))
    .catch((err) => {
      console.log("Error while creating the event", err);
      res.status(500).json({ message: "Error while creating the event" });
    });
});

router.put("/events/:id", (req, res, next)=>{
    Event.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((updatedEvent) => 
        res.json(updatedEvent)).catch((err) => {
      console.log("Error while updating the event", err);
      res.status(500).json({ message: "Error while updating the event" });
    });
})

router.delete("/events/:id", (req, res, next)=>{
    Guest.findByIdAndDelete(req.params.id).then(() => 
        res.json({ message: "event deleted"})).catch((err) => {
      console.log("Error while deleting the event", err);
      res.status(500).json({ message: "Error while deleting the event" });
    });
})

module.exports = router;
