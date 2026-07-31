import Task from '../models/task.model.js';
import asyncWrapper from '../middleware/asyncWrapper.js';
import { createCustomError } from '../helpers/custom-errors.js';

export const getAllTasks = asyncWrapper(async (req, res) => {
  const data = await Task.find({});
  res.status(201).json(data);
});

export const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

export const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    return next(createCustomError(`No task with ID: ${taskID}`, 404));
  }
  res.status(200).json(task);
});

export const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(createCustomError(`No task with ID: ${taskID}`, 404));
  }

  res.status(200).json({ id: taskID, data: req.body });
});

export const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) {
    return next(createCustomError(`No task with ID: ${taskID}`, 404));
  }
  res.status(200).json({ task: null, status: 'success' });
});
