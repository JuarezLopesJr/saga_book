import express from 'express';
import path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';

import auth from './routes/authRoute';
import user from './routes/userRoute';

dotenv.config();

const PORT = process.env.NODE_ENV || 8080;

const app = express();
app.use(cors('*'));

app.use(bodyParser.json());

MongoClient.connect(process.env.MONGO_URL, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('MongoDB connected...');
  }
});

mongoose.connect(process.env.MONGO_URL);
app.use('/api/auth', auth);
app.use('/api/users', user);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
