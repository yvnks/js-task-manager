import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI);

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

module.exports = TaskSchem;
