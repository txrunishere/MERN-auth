import { model, Schema } from 'mongoose'

const userSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true
    },
    password: String
  },
  { timestamps: true }
)

const User = model("User", userSchema)

export {
  User
}