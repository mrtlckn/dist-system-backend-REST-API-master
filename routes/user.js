const express = require("express");
const router = express.Router();
const User = require("../models/user");



// Getting all
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json({ users: users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* // Getting One
router.get("/:id", getSubscriber, (req, res) => {
  res.json(res.subscriber);
}); */

// Creating one
router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    surname: req.body.surname,
    departingDate: req.body.departingDate,
    returnDate: req.body.returnDate,
    flyingFrom: req.body.flyingFrom,
    flyingTo: req.body.flyingTo,
    biletNo: req.body.biletNo,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating One
/* router.patch("/:id", getSubscriber, async (req, res) => {
  if (req.body.name != null) {
    res.subscriber.name = req.body.name;
  }
  if (req.body.subscribedToChannel != null) {
    res.subscriber.subscribedToChannel = req.body.subscribedToChannel;
  }
  try {
    const updatedSubscriber = await res.subscriber.save();
    res.json(updatedSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}); */

// Deleting One
/* router.delete("/:id", getSubscriber, async (req, res) => {
  try {
    await res.subscriber.remove();
    res.json({ message: "Deleted Subscriber" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}); */

/* async function getSubscriber(req, res, next) {
  let subscriber;
  try {
    subscriber = await Subscriber.findById(req.params.id);
    if (subscriber == null) {
      return res.status(404).json({ message: "Cannot find subscriber" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.subscriber = subscriber;
  next();
} */



module.exports = router;
