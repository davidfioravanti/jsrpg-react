const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const UserRoutes = require("./server/routes/user");
const passport = require("passport")
var session = require("express-session");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", UserRoutes)

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/jsrpg-react", {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully")
})

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
