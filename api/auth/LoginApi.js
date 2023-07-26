import axios from "axios"
const domain = "http://localhost:8080"

const LoginApi = async ({ email, password }) => {
  try {
    const data = { email, password }
    const res = await axios({
      baseURL: `${domain}/users`,
      method: "POST",
      data,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    return res.data.data
  } catch (error) {
    console.log(error)
    return error.response.data
  }
}

export default LoginApi
