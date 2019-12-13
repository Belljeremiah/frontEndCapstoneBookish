const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/books/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/books`).then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:5002/books/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(newBook) {
    return fetch(`${remoteURL}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBook)
    }).then(data =>data.json())
  },
    update(editedBook) {
    return fetch(`${remoteURL}/books/${editedBook.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedBook)
    }).then(data => data.json());
  }
}
