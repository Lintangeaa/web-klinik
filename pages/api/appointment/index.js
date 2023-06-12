import connectMongo from "@/utils/ConnectDB"
import Appointment from "@/models/appointmentModel"

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */

const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

export default async function getAllAppointment(req, res) {
  try {
    await connectMongo()
    const appointment = await Appointment.find()
    console.log("success")
    res.status(200).json({ success: true, data: appointment })
  } catch (error) {
    console.log(error)
    res.status(404).json({ success: false, error })
  }
}
