const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/books/${id}`).then(result => result.json())
  },
  getAll() {
    const userId = JSON.parse(localStorage.getItem("credentials"))
    return fetch(`${remoteURL}/books?userId=${userId.id}`).then(result => result.json())
  },
  getBookByShelf(shelfId) {
    return fetch(`${remoteURL}/books?bookshelfId=${shelfId}`).then(result => result.json())
  },
  deleteBook(id) {
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
  },
  getAllBookShelves() {
    const userId = JSON.parse(localStorage.getItem("credentials"))
    return fetch(`${remoteURL}/bookshelves?userId=${userId.id}`).then(result => result.json())
  },
  deleteShelf(id) {
    return fetch(`${remoteURL}/bookshelves/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  updateShelf(editedShelf) {
    return fetch(`${remoteURL}/bookshelves/${editedShelf.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedShelf)
    }).then(data => data.json());
  },
  postNewShelf(newShelf) {
    return fetch(`${remoteURL}/bookshelves`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newShelf)
    }).then(data =>data.json())
  },
  getShelf(id) {
    return fetch(`${remoteURL}/bookshelves/${id}`).then(result => result.json())
  },
}
