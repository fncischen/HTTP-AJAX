import React, { Component } from 'react';
import axios from 'axios';

class AddFriendForm extends Component {
    constructor(props){
        super(props)


    }

    render() {
        return (
            <div className="add-friend-form">
            <h2> Add a new friend! </h2>
            <form onSubmit={this.props.addFriends}>
                <input type="text" name="newName" value={this.props.newName} onChange={this.props.handleChanges}></input>
                <input type="text" name="newEmail" value={this.props.newEmail} onChange={this.props.handleChanges}></input>
                <input type="text" name="newAge" value={this.props.newAge} onChange={this.props.handleChanges}></input>

                <button type="submit">Submit</button>
            </form>

        </div>
        );
    }
}

export default AddFriendForm;