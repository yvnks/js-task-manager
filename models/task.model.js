const mongoose = require('mongoose');

const connectDB = async (url) => {
  return mongoose.connect(url);
};

const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Enter a valid Name'],
      trim: true,
      maxlength: [20, 'Cannot be more than 20 Characters'],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Task = mongoose.model('Task', TaskSchema);

module.exports = { connectDB, Task };
