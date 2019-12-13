// import myApiKey from 'myApiKey';

export default {
    getAllBookResults(volume, author) {
        return fetch(`https://www.googleapis.com/books/v1/volumes?q=${volume}&+inauthor=${author}&key=AIzaSyBst8M9zshncjh0vr50sQPdKeoVYDDGJCQ`).then(result => result.json())
    }
    
}

