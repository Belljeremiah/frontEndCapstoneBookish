const baseURL = "http://localhost:5002"

export default {
    getAllUsers() {
        return fetch(`${baseURL}/users`).then(result => result.json())
    },
    post(newUser) {
        return fetch(`${baseURL}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newUser)
        }).then(data =>data.json())
}
}