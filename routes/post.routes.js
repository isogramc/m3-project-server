// routes/post.routes.js

const router = require('express').Router();

const Post = require('../models/Post.model');

router.get("/posts", (req, res, next) => {

  console.log(req.query.userId);

  const { userId } = req.query;

  if(userId && userId !== undefined) {

    Post.find({ userId }).sort({Timestamp:-1}).then((allPosts)=> {
      res.json({posts: allPosts});
    }).catch((error)=>{
      res.status(500).json({ message: "Error while retrieving all Posts"})
    })

  } else {
    Post.find().sort({Timestamp:-1}).then((allPosts)=> {
      res.json({posts: allPosts});
    }).catch((error)=>{
      res.status(500).json({ message: "Error while retrieving all Posts"})
    })
  }

   
  });

  


//  POST /posts  -  Creates a new post
router.post('/posts', (req, res, next) => {

  console.log(req.body);

  const {
      userId,
      handle,
      message
  } = req.body; 

  Post.create({ 
      userId,
      handle,
      message
    })
    .then((response) => res.json(response))
    .catch((err) => {
      console.log("Error while creating the post", err);
      res.status(500).json({ message: "Error while creating the post" });
    });
});

router.put("/posts/:id", (req, res, next)=>{
    console.log(req.body);
    Post.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((updatedPost) => 
        res.json(updatedPost)).catch((err) => {
      console.log("Error while updating the post", err);
      res.status(500).json({ message: "Error while updating the post" });
    });
})

router.delete("/posts/:id", (req, res, next)=>{
    Post.findByIdAndDelete(req.params.id).then(() => 
        res.json({ message: "post deleted"})).catch((err) => {
      console.log("Error while deleting the post", err);
      res.status(500).json({ message: "Error while deleting the post" });
    });
})

module.exports = router;
