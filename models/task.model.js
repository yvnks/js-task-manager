import mongoose from 'mongoose';

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'You need to provide a valid name'],
    trim: true,
    max: [20, 'Cannot be more than 20 characters.'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model('Task', TaskSchema);
