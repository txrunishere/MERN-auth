import { User } from "../models/user.model.js";
import bcrypt from 'bcrypt'

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
      return res.status(404).json({
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

export { handleHealthCheck, handleRegister };
