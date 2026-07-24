const { Task } = require('../models/task.model');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
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
    const taskID = req.params.id;
    const task = await Task.findById({ _id: taskID });

    if (!task) {
      return res.status(404).json({ error: `No task with ${id} exist` });
    }
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ error: 'Invalid ID' });
  }
};

const updateTasks = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ error: `No task with ID: ${id}` });
    }
    res.status(200).json(task);
  } catch (error) {
    res.json({ msg: error });
  }
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
  getAllTasks,
  createTask,
  getTask,
  updateTasks,
  deleteTasks,
};
