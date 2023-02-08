const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://nicholasch24:hunter1224@cluster0.uuyxsu9.mongodb.net/nfl"
  )
  .catch((err) => console.log(err));

const playerSchema = mongoose.Schema({
  name: String,
  team: String,
});
const teamSchema = mongoose.Schema({
  name: String,
});
const Player = mongoose.model("players", playerSchema);
const Team = mongoose.model("teams", teamSchema);

app.get("/teams", (req, res) => {
  Team.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.get("/players/:id", (req, res) => {
  Player.findOne({ _id: req.params.id }).then((doc) => {
    res.status(500).json(doc);
  });
});

app.get("/players", (req, res) => {
  Player.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.get("/", (req, res) => {
  res.send("express is running");
});

app.listen(3005, () => {
  console.log("Listening on 3005");
});
