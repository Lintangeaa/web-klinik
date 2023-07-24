import { addUser, deleteUser, getAllUser } from "@/prisma/user"

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "POST": {
        const { username, email, password, role } = req.body
        const user = await addUser(username, email, password, role)

        return res.status(201).json(user)
      }
      case "GET": {
        const users = await getAllUser()

        return res.status(201).json(users)
      }
      case "DELETE": {
        const { id } = req.query

        await deleteUser(id)

        return res.status(201).json({ message: "User berhasil dihapus" })
      }
    }
  } catch (error) {
    return res.status(400).json({ message: error })
  }
}
