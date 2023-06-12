import connectMongo from "@/utils/ConnectDB"
import User from "@/models/userModel"

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */

const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

export default async function addUser(req, res) {
  const { username, email, password, role } = req.body

  try {
    await connectMongo()
    const hashedPassword = await bcrypt.hash(password, 10)

    const data = await User.create({
      username,
      email,
      password: hashedPassword,
      role,
    })

    res.status(201).json({
      status: "success",
      message: "Successfuly insert data",
      data,
    })
  } catch (error) {
    res.status(400).json({
      message: error.message,
    })
  }
}
