import React, { Component } from 'react'
import BookManager from "../../modules/BookManager"

class ShelfEditForm extends Component {
    state = {
        shelfName: "",
        genre: "",
        loadingStatus: true,
    };

    handleFieldChange = e => {
        const stateToChange = {}
        stateToChange[e.target.id] = e.target.value
        this.setState(stateToChange)
    }

    updateExistingShelf = e => {
        e.preventDefault()
        this.setState({ loadingStatus: true });
        const userId = JSON.parse(localStorage.getItem("credentials"));
        const editedShelf = {
            id: this.props.match.params.shelfId,
            shelfName: this.state.shelfName,
            genre: this.state.genre,
            loadingStatus: false,
            userId: userId.id
        };

        BookManager.updateShelf(editedShelf)
        .then(() => this.props.history.push("/shelves"))
    }

    componentDidMount() {
        BookManager.get(this.props.match.params.shelfId)
        .then(shelf => {
            this.setState({
                shelfName: shelf.shelfName,
                genre: shelf.genre,
                loadingStatus: false,
            });
        });
    }

    render() {
        return (
            <React.Fragment>
            <form>
                <fieldset>
                    <div className="formgrid">
                    
                    <input
                    type="text"
                    required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="shelfName"
                    value={this.state.shelfName}
                    />
                    <label htmlFor="shelfName">Shelf Name</label>

                    <input
                    type="text"
                    required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="genre"
                    value={this.state.genre}
                    />
                    <label htmlFor="genre">Genre of Shelf</label>

                    <div className="alignRight">
                    <button
                    type="button" disabled={this.state.loadingStatus}
                    onClick={this.updateExistingBook}
                    className="btn btn-primary"
                    >Save</button>
                    </div>
                </div>
            </fieldset>
            </form>
            </React.Fragment>
        );
    }
}

export default ShelfEditForm;