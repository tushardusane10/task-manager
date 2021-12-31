const express = require("express");
const { get } = require("http");
const User = require("../model/user");

const router = new express.Router();

/**
 * Create a user
 */
router.post("/user", async (req, res) => {
  try {
    const user = new User(req.body);
    console.log(user);
    const createdUser = await user.save();
    res.status(201).send(createdUser);
  } catch (e) {
    res.status(404).send(e);
  }
});
/**
 * Get all the user
 */
router.get("/user", async (req, res) => {
  try {
    await User.find();
    res.status(200).send(createdUser);
  } catch (e) {
    res.status(404).send(e);
  }
});
/**
 * GET user by Id
 */
router.get("/user/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.findById(_id);
    if (user) {
      res.status(200).send(user);
    }
    res.status(200).send(createdUser);
  } catch (e) {
    res.status(404).send(e);
  }
});

/**
 * remove the user
 */
router.delete("/user/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.deleteOne({ _id });
    if (user) {
      res.status(200).send();
    }
    res.status(200).send();
  } catch (e) {
    res.status(404).send(e);
  }
});
/**
 * Update the user
 */
router.patch("/user/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const user = req.body;
    const updatedUser = await User.findByIdAndUpdate(_id, user, {
      new: true,
      runValidators: true,
    });
    if (user) {
      res.status(200).send(updatedUser);
    }
    res.status(200).send(updatedUser);
  } catch (e) {
    res.status(404).send(e);
  }
});

module.exports = router;
