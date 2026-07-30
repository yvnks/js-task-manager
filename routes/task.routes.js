import express from 'express';
const router = express.Router();
import {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} from '../controller/task.controller.js';

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

export default router;
