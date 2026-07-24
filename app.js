const express = require('express');
const routes = require('./routes/task.routes');
const PORT = process.env.PORT || 3000;

const app = express();

// routes
app.get('/hello', (req, res) => {
  res.json({ msg: 'Hey hey' });
});

// Set up middleware
app.use(express.json());
app.use('/api/v1/tasks', routes);

app.listen(PORT, () => {
  console.log(
    `Server is running on http://localhost:${PORT}` +
      '; Press Ctrl + C to terminate.',
  );
});
