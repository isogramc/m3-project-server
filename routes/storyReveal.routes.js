// routes/storyReveal.routes.js

const router = require('express').Router();

const StoryReveal = require('../models/StoryReveal.model');

router.get("/clue-notes", (req, res, next) => {
    StoryReveal.find().then((allPlotPoints)=> {
        res.json({storyPoints: allPlotPoints});
    }).catch((error)=>{
        res.status(500).json({ message: "Error while retrieving all Story Points"})
    })
  });


module.exports = router;
