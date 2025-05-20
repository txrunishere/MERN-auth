import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const verifyJWT = async (req, res, next) => {
  try {
    const token = req.cookies.token
    if (!token) {
      return res.status(400).json({
        error: "Token Not Found",
      });
    }

    const encryptedToken = await jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(encryptedToken._id).select('-password')

    if (!user) {
      return res.status(400).json({
        error: "User not Found",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(400).json({
      error: "Token is Invalid or expired",
    });
  }
};
