import Task from '../models/task.model.js';

export const getAllTasks = async(req, res) => {
  // const data = await Task
  res.json();
};

export const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
};

export const getTask = async (req, res) => {
  const id = req.params.id;
  const task = await Task.findById(id);
  // normalize data by id;
  res.json(task);
};

export const updateTask = (req, res) => {
  res.send('update task');
};

export const deleteTask = (req, res) => {
  res.send('delete task');
};
