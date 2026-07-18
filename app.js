const express = require('express');
const app = express();
const controller = require('./controller/app.controller');
const routes = require('./routes/app.routes');
require('./models/app.model');

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
