import { Schema, model, models } from "mongoose"

const userSchema = new Schema({
  username: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  role: String,
  password: String,
})

const User = models.User || model("User", userSchema)

export default User
