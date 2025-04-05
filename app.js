// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const { isAuthenticated, isAdmin } = require("./middleware");
const User = require("./models/User.model");

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const guestRoutes = require("./routes/guest.routes");
app.use("/api", guestRoutes);

const characterRoutes = require("./routes/character.routes");
app.use("/api", characterRoutes);

const clientRoutes = require("./routes/client.routes");
app.use("/api", clientRoutes);

app.get("/api/users/:id", isAuthenticated, isAdmin, (req, res, next) => {
  console.log("req.params.id", req.params.id);
  User.findById(req.params.id).then((User) => 
    res.json(User)).catch((err) => {
    res.status(500).json({ message: "Error while getting user details" });
  });
})


app.get("/docs", (req, res) => {
    res.sendFile(__dirname + "/views/docs.html");
});


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
