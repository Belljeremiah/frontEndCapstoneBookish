import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// Making an attempt at styling this thing

class ShelfCard extends Component {
    render () {
        console.log("Shelf Card Rendered")
        return (
            <>
            <Card>
                <div className="card">
                    <div className="card-content">
                    <h3>Shelf Name: {this.props.shelf.shelfName}</h3>
                    <h4>Shelf Genre: {this.props.shelf.genre}</h4>
                    </div>
                    <button type="button" className="btn btn-primary btn-lg" onClick={() => this.props.history.push(`/bookshelves/${this.props.shelf.id}/edit`)}>Edit</button>
                    <br></br>
                    <button type="button" className="btn btn-secondary btn-lg" onClick={() => this.props.deleteShelf(this.props.shelf.id)}>Delete Shelf</button>
                    <br></br>
                    <Link to={`/bookshelves/${this.props.shelf.id}`}><button type="button" className="btn btn-primary btn-lg">Shelf Detail View</button></Link>
                </div>
            </Card>
            </>
        )
    }
}

export default ShelfCard;