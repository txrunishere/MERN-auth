import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const handleHealthCheck = (_, res) => {
  return res.send("OK Report");
};

const handleRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.status(400).json({
        error: "Name is required",
      });
    }

    if (!password || password.length < 6) {
      return res.status(400).json({
        error: "Password atleast 6 letters long",
      });
    }

    const isUserExists = await User.findOne({ email });

    if (isUserExists) {
      return res.status(400).json({
        error: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      email,
      name,
      password: hashedPassword,
    });

    if (user) {
      return res.status(201).json({
        message: `User with email ${user.email} register successfully`,
        user,
      });
    }
  } catch (error) {
    console.log("Error", error);
    return res.status(400).json({
      error: "Error while register user",
    });
  }
};

const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({
        error: "Email is Required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        error: "User not Found",
      });
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(400).json({
        error: "Invalid Password",
      });
    } else {
      await jwt.sign(
        { _id: user._id },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        },
        (err, token) => {
          if (err) {
            return res.status(400).json({
              error: "Error while generating token",
            });
          }
          return res
            .status(200)
            .cookie("token", token)
            .json({
              message: `User ${user.email} login successfully`,
              token
            });
        }
      );
    }
  } catch (error) {
    console.log("Error", error);
    return res.status(400).json({
      error: "Error while login user",
    });
  }
};

export { handleHealthCheck, handleRegister, handleLogin };
