import mongoose from 'mongoose';
import { env } from '../utils/env.js';

export const initMongoConection = async () => {
  try {
    const mongoUser = env('MONGODB_USER');
    const mongoPassword = env('MONGODB_PASSWORD');
    const mongoUrl = env('MONGODB_URL');
    const mongoDB = env('MONGODB_DB');

    await mongoose.connect(
      `mongodb+srv://${mongoUser}:${mongoPassword}@${mongoUrl}/${mongoDB}?retryWrites=true&w=majority&appName=Cluster0`,
    );

    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.log('Error while setting up mongo connection', error);
    throw error;
  }
};
