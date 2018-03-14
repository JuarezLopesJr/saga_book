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

export default router;

// const { email, password } = req.body.data;
// const passwordHash = await bcrypt.hashSync(password, 10);
// // const tokenHash = jwt.sign({ email }, process.env.JWT_SECRET);
// const user = await new User({
//   email,
//   password: passwordHash
//   // token: tokenHash
// }).save();
// res.json({ user: user.toAuthJSON() });
//
// console.log(user);
