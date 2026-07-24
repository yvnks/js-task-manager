const express = require('express');
const app = express();
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getTask,
  updateTasks,
  deleteTasks,
} = require('../controller/task.controller');

router.route('/').get(getAllTasks);
router
  .route('/:id')
  .get(getTask)
  .post(createTask)
  .patch(updateTasks)
  .delete(deleteTasks);

module.exports = router;
