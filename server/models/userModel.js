import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import uniqueValidator from 'mongoose-unique-validator';

const { Schema } = mongoose;

const schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      index: true,
      unique: true
    },
    password: { type: String, required: true }
    // confirmed: { type: Boolean, default: false },
    // confirmationToken: { type: String, default: '' }
  },
  { timestamps: true }
);

schema.methods.setPassword = function setPassword(password) {
  this.password = bcrypt.hashSync(password, 10);
};

schema.methods.generateJWT = function generateJWT() {
  return jwt.sign(
    {
      email: this.email // email from schema
      // confirmed: this.confirmed
    },
    process.env.JWT_SECRET // the 'salt' attribute for encryption
  );
};

// schema.methods.isValidPassword = function isValidPassword(password) {
//   return bcrypt.compareSync(password, this.password); //password from schema
// };

schema.methods.toAuthJSON = function toAuthJSON() {
  return {
    email: this.email,
    token: this.generateJWT(),
    confirmed: this.confirmed
  };
};

export default mongoose.model('User', schema);
