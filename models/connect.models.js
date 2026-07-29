import mongoose, { mongo } from 'mongoose';

const connectionString =
  'mongodb+srv://jjyankson19_db_user:QVqVmo2MicVAnytU@task-manager-api.dwj8sm3.mongodb.net/task_manager_db';

async function connectDB(url) {
  try {
    await mongoose.connect(connectionString);
    console.log('connected to db');
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
