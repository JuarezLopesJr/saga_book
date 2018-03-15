import express from 'express';

import User from '../models/userModel';
import parseErrors from '../utils/parseErrors';
import { sendConfirmationEmail } from '../mailer';

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body.user;

  const user = await new User({ email });
  user.setPassword(password);
  user.setConfirmationToken();
  user.save();
  sendConfirmationEmail(user);

  res.json({ user: user.toAuthJSON() });
  console.log(user);
});

export default router;
