/* require("dotenv").config(); */

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

app.use("/api/users", usersRouter);

app.listen(process.env.PORT || 8080, () => console.log("Server Started"));
