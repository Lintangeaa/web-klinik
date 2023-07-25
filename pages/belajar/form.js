import React from "react"

const form = () => {
  return (
    <div>
      <form action="/api/users" method="POST">
        <label for="first">First name:</label>
        <input type="text" id="first" name="username" />
        <label for="last">Last name:</label>
        <input type="text" id="last" name="email" />
        <label for="last">Last name:</label>
        <input type="text" id="last" name="password" />
        <label for="last">Last name:</label>
        <input type="text" id="last" name="role" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default form
