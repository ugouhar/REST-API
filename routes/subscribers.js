const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber");
const { restart } = require("nodemon");

// Getting all subscribers
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Getting one
router.get("/:id", async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id);
    if (subscriber == null) {
      res.status(400).json({ msg: "Cannot find subscriber" });
    } else {
      res.status(200).json(subscriber);
    }
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// Creating One
router.post("/", async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel,
  });

  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// Updating One
router.patch("/:id", (req, res) => {
 try {
  let subscriber = await Subscriber.findById(req.params.id);
  if (subscriber == null) {
    res.status(400).json({ msg: "Cannot find subscriber" });
  } else {
    
  }
 } catch (err) {
    res.json({msg:err.message}) 
 }

  if(req.body.name != null){
}

});

// Deleting One
router.delete("/:id", async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id);
    if (subscriber == null) {
      res.status(400).json({ msg: "Cannot find subscriber" });
    } else {
      await subscriber.remove();
      res.status(200).json({ msg: "Subscriber deleted" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

router.delete("/", async (req, res) => {
  try {
    await Subscriber.deleteMany({});
    res.status(200).json({ msg: "All subscribers deleted" });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});
module.exports = router;


function getSubscriber(req, res){

}