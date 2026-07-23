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

const getTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findById({ _id: id });

    if (!task) {
      return;
    }
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateTasks = (req, res) => {
  res.send('update tasks');
};

const deleteTasks = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findByIdAndDelete(id);
    console.log('Deleted successfully');
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getTasksFromAPI,
  createTasksToAPI,
  getTask,
  updateTasks,
  deleteTasks,
};
