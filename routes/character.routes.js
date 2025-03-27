// routes/character.routes.js

const router = require('express').Router();

const Character = require('../models/character.model');

router.get("/characters", (req, res, next) => {
    Character.find().then((allCharacters)=> {
        res.json({characters: allCharacters});
    }).catch((error)=>{
        res.status(500).json({ message: "Error while retrieving all Story characters"})
    })
  });


module.exports = router;
