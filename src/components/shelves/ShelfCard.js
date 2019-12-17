import React, { Component } from 'react';

class ShelfCard extends Component {
    render () {
        console.log("Shelf Card Rendered")
        return (
            <>
                <div className="card">
                    <div className="card-content">
                        <h1>Shelf Name:</h1>
                        <h3>Shelf Genre:</h3>
                    </div>
                </div>
            </>
        )
    }
}

export default ShelfCard;