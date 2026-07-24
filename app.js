const express = require('express');
const routes = require('./routes/task.routes');
const { connectDB } = require('./models/task.model');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

// Setup middleware.
app.use(express.json());
app.use('/api/v1/tasks', routes);
app.use(express.static('./public'));

async function init() {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(
        `Server is listening on Port: ${PORT}; http://localhost:${PORT}` +
          ' Press Ctrl + C to cancel.',
      );
    });
  } catch (error) {
    console.log(error);
  }
}

init();
