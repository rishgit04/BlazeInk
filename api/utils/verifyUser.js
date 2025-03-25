import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';
import User from '../models/user.model.js';
export const verifyToken = (req, res, next) => {
  // const token = req.cookies.access_token;
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token)
  if (!token) {
    return next(errorHandler(401, 'Unauthorized'));
  }
  jwt.verify(token, process.env.JWT_SECRET, async(err, user) => {
    if (err) {
      return next(errorHandler(401, 'Unauthorized'));
    }
    // const user=await User.find({_id: user.id});
    req.user = user;
    console.log(req.user);
    next();
  });
};
