const mongoose = require('mongoose');

const connectDB = async (url) => {
  return mongoose.connect(url);
};

const TaskSchema = new mongoose.Schema(
  {
    name: String,
    completed: Boolean,
  },
  { timestamps: true },
);

const Task = mongoose.model('Task', TaskSchema);

module.exports = { connectDB, Task };
