import connectMongo from "@/utils/ConnectDB"
import Appointment from "@/models/appointmentModel"

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */

const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

export default async function addAppointment(req, res) {
  const { fullName, gender, birthday, phone, address, medicalHistory } =
    req.body

  try {
    await connectMongo()

    const data = await Appointment.create({
      fullName,
      gender,
      birthday,
      phone,
      address,
      medicalHistory,
    })

    res.status(201).json({
      status: "success",
      message: "Success to reservation",
      data,
    })
  } catch (error) {
    res.status(400).json({
      message: error.message,
    })
  }
}
