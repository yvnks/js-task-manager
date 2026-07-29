import mongoose from 'mongoose';

export const TaskSchema = mongoose.Schema({
  name: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

export default mongoose.model('Task', TaskSchema);
