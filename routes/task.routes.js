const express = require('express');
const router = express.Router();
const { getAllTasks } = require('../controller/task.controller');

router.route('/').get((req, res) => {
  res.send('all items');
});

module.exports = router;
