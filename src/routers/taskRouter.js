const express = require("express");
const Task = require("../model/task");

const taskRouter = new express.Router();

taskRouter.post("/task", async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e.error);
  }
  console.log(task);
});

taskRouter.get("/task/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    console.debug(`Searching task by Id : ${_id}`);
    await Task.findById(_id);
    res.status(200).send();
  } catch (e) {
    console.debug(e);
    res.status(404).send(e.error);
  }
});

/**
 * remove the task
 */
taskRouter.delete("/task/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    console.debug(`deleting task by Id : ${_id}`);
    await Task.deleteOne({ _id });
    res.status(200).send();
  } catch (e) {
    console.debug(e);
    res.status(404).send(e.error);
  }
});

/**
 * Would update the task with new value
 */
taskRouter.patch("/task/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    console.debug(`updating task by Id : ${_id}`);
    const task = await Task.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });
    if (task) res.status(200).send(task);
    else res.status(400).send();
  } catch (e) {
    console.debug(e);
    res.status(404).send(e.error);
  }
});
module.exports = taskRouter;
