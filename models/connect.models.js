import mongoose, { mongo } from 'mongoose';

async function connectDB(uri) {
  try {
    await mongoose.connect(uri);
    console.log('connected to db');
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
