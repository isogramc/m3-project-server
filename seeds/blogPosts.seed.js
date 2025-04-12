// To insert in "seeds/characters.seed.js"
require('dotenv').config()
const mongoose = require("mongoose");

const Post = require("../models/Post.model");

const posts = require("../posts.json");

  // ... your code here
  mongoose
  .connect(process.env.MONGODB_URI)
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .then(() => {
    Post.create(posts)
      .then((posts) => {
        console.log("Posts created ->", posts);
        mongoose.connection.close();
      })
      .catch((error) => {
        console.error("Error while creating posts ->", error);
        mongoose.connection.close();
      });
  })

module.exports = posts;