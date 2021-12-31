require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

var cors = require('cors')

app.use(cors())



mongoose.connect(
  "mongodb+srv://admin:12345671@cluster0.jrvo4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const usersRouter = require("./routes/user");


app.use(cors(), (req, res, next) => {
  next();
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.use("/api/users", usersRouter);

app.listen(7000, () => console.log("Server Started"));
