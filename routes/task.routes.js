const express = require('express');
const app = express();
const router = express.Router();
const {
  getTasksFromAPI,
  createTasksToAPI,
  getTask,
  updateTasks,
  deleteTasks,
} = require('../controller/app.controller');

router.route('/').get(getTasksFromAPI);
router
  .route('/:id')
  .get(getTask)
  .post(createTasksToAPI)
  .patch(updateTasks)
  .delete(deleteTasks);

module.exports = router;
