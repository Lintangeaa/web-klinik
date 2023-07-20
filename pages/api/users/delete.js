import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function deleteUser(req, res) {
  try {
    const { id } = req.query
    const user = await prisma.User.delete({
      where: {
        id: parseInt(id, 10),
      },
    })
    console.log("succes")
    res
      .status(200)
      .json({ success: true, message: "User berhasil dihapus", data: user })
  } catch (error) {
    console.log(error)
    res.status(404).json({ success: false, error })
  }
}
