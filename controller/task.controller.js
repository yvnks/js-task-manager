import Task from '../models/task.model.js';

export const getAllTasks = async (req, res) => {
  try {
    const data = await Task.find({});
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
};

export const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `No task with ID: ${taskID}` });
    }
    // normalize data by id;
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const updateTask = (req, res) => {
  res.send('update task');
};

export const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `No task with ID: ${taskID}` });
    }
    res.status(200).json({ task: null, status: 'success' });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
