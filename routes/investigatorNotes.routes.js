// routes/investigatornotes.routes.js

const router = require('express').Router();

const InvestigatorNotes = require('../models/InvestigatorNotes.model');

router.get("/clue-notes", (req, res, next) => {
    InvestigatorNotes.find().then((allNotes)=> {
        res.json({guests: allNotes});
    }).catch((error)=>{
        res.status(500).json({ message: "Error while retrieving all Investigator Notes"})
    })
  });


module.exports = router;
