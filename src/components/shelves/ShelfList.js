import React, { Component } from 'react'
//import the components we will need
import ShelfCard from './ShelfCard'
import BookManager from '../../modules/BookManager'
import "bootstrap/dist/css/bootstrap.min.css"

class ShelfList extends Component {
    //define what this component needs to render
    state = {
        shelves: [],
    }

componentDidMount(){
    console.log("BOOK LIST: ComponentDidMount");
    //getAll from BookManager and hang on to that data; put it in state
    BookManager.getAllBookShelves()
    .then((shelvesArray) => {
        this.setState({
            shelves: shelvesArray
        })
    })
}

deleteShelf = id => {
    BookManager.deleteShelf(id)
    .then(() => {
    BookManager.getAllBookShelves()
    .then((newShelves) => {
        this.setState({
            shelves: newShelves
        })
    })
    })
}


render() {
    console.log("ShelfList: Render");
    console.log(this.state.shelves)
    
    return(
        <React.Fragment>
            <section className="section-content">
                <button type="button" class="btn btn-primary btn-lg"
                onClick={() => {this.props.history.push("/bookshelves/new")}}>
                Create Shelf
                </button>
            </section>
        <div className="container-cards">
        {this.state.shelves.map(shelf =>
            <ShelfCard 
            key={shelf.id} 
            shelf={shelf} 
            deleteShelf={this.deleteShelf}
            {...this.props}
            />
            )}
        </div>
    </React.Fragment>
    )
    }
}

export default ShelfList;