import express from 'express';
import router from './routes/task.routes.js';
import connectDB from './models/connect.models.js';
import 'dotenv/config';

const app = express();

const PORT = process.env.PORT || 3000;

const init = async (uri) => {
  await connectDB(process.env.MONGODB_URI);
  app.listen(PORT, () => {
    console.log(
      `Server is running on http://localhost:${PORT}` +
        '; Press Ctrl + C to terminate.',
    );
  });
};

// Set up middleware
app.use(express.json());
app.use(express.static('./public'));

app.use('/api/v1/tasks', router);

// Custom 404 middleware
app.use()

init();
