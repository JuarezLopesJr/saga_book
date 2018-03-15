import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/userModel';

const router = express.Router();

router.post('/', async (req, res) => {
  const { email } = req.body.data;
  const user = await User.findOne({ email });
  res.json({ user: user.toAuthJSON() });
  console.log(user);
});

router.post('/confirmation', async (req, res) => {
  const { token } = req.body;
  const user = await User.findOneAndUpdate(
    { confirmationToken: token },
    { confirmationToken: '', confirmed: true },
    { new: true }
  );
  user ? res.json({ user: user.toAuthJSON() }) : res.status(400).json({});
});

export default router;
