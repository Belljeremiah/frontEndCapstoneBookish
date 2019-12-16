import  ApiKey  from '../apikey'

export default {
    get(volume, author) {
        return fetch(`https://www.googleapis.com/books/v1/volumes?q=${volume}&+inauthor=${author}&key=${ApiKey}`).then(result => result.json())
    }
    
}

