const { Task } = require('../models/task.model');

const getTasksFromAPI = async (req, res) => {
  try {
    const task = await Task.find({});
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createTasksToAPI = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = (req, res) => {
  res.send('get a single task');
};

const updateTasks = (req, res) => {
  res.send('update tasks');
};

const deleteTasks = (req, res) => {
  res.send('delete tasks...');
};

module.exports = {
  getTasksFromAPI,
  createTasksToAPI,
  getTask,
  updateTasks,
  deleteTasks,
};
