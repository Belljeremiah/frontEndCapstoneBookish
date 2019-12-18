import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Jumbotron } from 'react-bootstrap';

class ShelfCard extends Component {
    render () {
        console.log("Shelf Card Rendered")
        return (
            <>
            <Jumbotron>
                <div className="card">
                    <div className="card-content">
                        <p>Shelf Name:</p>
                        <p>Shelf Genre:</p>
                    </div>
                </div>
            </Jumbotron>
            </>
        )
    }
}

export default ShelfCard;