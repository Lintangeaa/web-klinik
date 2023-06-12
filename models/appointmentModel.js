import { Schema, model, models } from "mongoose"

const userSchema = new Schema({
  fullName: String,
  gender: String,
  birthday: String,
  phone: String,
  address: String,
  medicalHistory: String,
})

const Appointment = models.Appointment || model("Appointment", userSchema)

export default Appointment
