const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO: Please make sure you edit the Post model to whatever makes sense in this case
const postsSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    handle: String,
    Timestamp: { type: Date, default: Date.now },
    message: String,
  }
);

const Post = mongoose.model("Post", postsSchema);

module.exports = Post;
