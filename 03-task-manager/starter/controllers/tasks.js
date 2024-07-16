// app.get(`/api/v1/tasks`) - get all the tasks
// app.post(`/api/v1/tasks`) - create a new task
// app.get(`/api/v1/tasks/:id`) - get a single task
// app.patch(`/api/v1/tasks/:id`) - update task
// app.delete(`/api/v1/tasks/:id`) - delete task
const Task = require("../models/tasks");
const getAllTasks = async (req, res) => {
 try {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
 } catch (error) {
  res.status(500).json({ msg: error });
 }
};

const createTask = async (req, res) => {
 try {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
 } catch (error) {
  res.status(500).json({ msg: error });
 }
};

const getTask = async (req, res) => {
 try {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
   return res.status(404).json({ msg: `No task with id: ${taskID}` });
  }
  res.status(200).json({ task });
 } catch (error) {
  res.status(500).json({ msg: error });
 }
};

const updateTask = async (req, res) => {
 try {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
   new: true,
   runValidators: true,
  });
  if (!task) {
   return res.status(404).json({ msg: `No task with id: ${taskID}` });
  }
  res.status(200).json({ task });
 } catch (error) {
  res.status(500).json({ msg: error });
 }
};

const deleteTask = async (req, res) => {
 try {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
   return res.status(404).json({ msg: `No task with id: ${taskID}` });
  }
  res.status(200).json({ task });
 } catch (error) {
  res.status(500).json({ msg: error });
 }
};

module.exports = {
 getAllTasks,
 createTask,
 getTask,
 updateTask,
 deleteTask,
};
