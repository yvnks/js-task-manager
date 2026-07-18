const getTasksFromAPI = (req, res) => {
  res.send('all task items...');
};

const createTasksToAPI = (req, res) => {
  res.json(req.body);
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
