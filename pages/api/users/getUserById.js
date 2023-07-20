import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function getUserById(req, res) {
  try {
    const { id } = req.query
    const user = await prisma.User.findUnique({
      where: {
        id: parseInt(id, 10),
      },
    })
    console.log("succes")
    res.status(200).json({ success: true, data: user })
  } catch (error) {
    console.log(error)
    res.status(404).json({ success: false, error })
  }
}
