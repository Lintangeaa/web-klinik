import axios from "axios"
const domain = "http://localhost:3000"

export const LoginApi = async (email, password) => {
  const res = await axios({
    method: "POST",
    baseURL: `${domain}/api/login`,
    data: {
      email,
      password,
    },
    headers: {
      "Content-Type": "application/json",
    },
  })
  if (res.data.success == false) {
    return false
  }
  return res.data.data
}

export const getAllUser = async () => {
  const res = await axios({
    method: "GET",
    baseURL: `${domain}/api/users`,
    headers: {
      "Content-Type": "application/json",
    },
  })
  if (res.data.success == false) {
    return res.data.success
  }
  return res.data.data
}
