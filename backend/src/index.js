import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const connectDB = async () => {
  try {
    const mongooseConnectionInstence = await mongoose.connect(
      process.env.DB_URL
    );
    console.log(
      "DB Connected",
      mongooseConnectionInstence.connection.host,
      mongooseConnectionInstence.connection.name
    );
  } catch (error) {
    console.log("Error while connect to DB ", error);
    process.exit(1);
  }
};

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

import authRouter from "./routes/auth.routes.js";

app.use("/api/v1/user", authRouter);

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`App is listing on PORT: ${process.env.PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
