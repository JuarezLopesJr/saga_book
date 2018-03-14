import express from 'express';

import User from '../models/userModel';

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body.user;
  const user = await new User({ email });
  user.setPassword(password);
  user.save();

  res.json({ user: user.toAuthJSON() });
  console.log(user);
});

export default router;
