import express from 'express';
import router from './routes/task.routes.js';
import * as models from './models/connect.models.js';

const app = express();

// routes
app.get('/hello', (req, res) => {
  res.json({ msg: 'Hey hey' });
});

const PORT = process.env.PORT || 3000;

// Set up middleware
app.use(express.json());
app.use('/api/v1/tasks', router);

app.listen(PORT, () => {
  console.log(
    `Server is running on http://localhost:${PORT}` +
      '; Press Ctrl + C to terminate.',
  );
});
