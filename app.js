const express = require('express');
const app = express();
const controller = require('./controller/task.controller');
const routes = require('./routes/task.routes');
require('./models/task.model');

const PORT = process.env.PORT || 3000;

// Setup middleware.
app.use(express.json());
app.use('/api/v1/tasks', routes);

app.get('/tasks');
app.listen(PORT, () => {
  console.log(
    `Server is listening on Port: ${PORT}; http://localhost:${PORT}` +
      ' Press Ctrl + C to cancel.',
  );
});
