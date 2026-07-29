import express from 'express';
import router from './routes/task.routes.js';
import connectDB from './models/connect.models.js';

const app = express();

const PORT = process.env.PORT || 3000;

const init = async (URL) => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(
      `Server is running on http://localhost:${PORT}` +
        '; Press Ctrl + C to terminate.',
    );
  });
};

init();

// Set up middleware
app.use(express.json());
app.use('/api/v1/tasks', router);
