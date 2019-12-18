import React, { Component } from 'react';
import BookManager from '../../modules/BookManager';

class ShelfForm extends Component {
    state = {
        shelfName: "",
        genre: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal, object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewShelf = evt => {
        evt.preventDefault();
        if (this.state.shelfName === "" || this.state.genre === "") {
            window.alert("Hey wanna kill all humans?");
        } else {
            this.setState({ loadingStatus: true });
            const userId = JSON.parse(localStorage.getItem("credentials"));
            const shelf = {
                shelfName: this.state.shelfName,
                genre: this.state.genre,
                userId: userId.id
            };

            // Create the animal and redirect user to animal list
            BookManager.postNewShelf(shelf)
            .then(() => this.props.history.push("/bookshelves"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="shelfName"
                        placeholder="SHelf Name"
                        />
                        <label htmlFor="shelfName">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="genre"
                        placeholder="genre"
                        />
                        <label htmlFor="genre">genre</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewShelf}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default ShelfForm;