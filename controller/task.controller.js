const { Task } = require('../models/task.model');

const getTasksFromAPI = (req, res) => {
  res.send('Get task from mongo');
};

const createTasksToAPI = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
  task.save();
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
