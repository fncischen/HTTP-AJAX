import React, { Component } from 'react';
import axios from 'axios';

import Friend from './Friend';

class FriendsList extends Component {
    constructor() {
        super();

        this.state = {
            friendsList: []
        }
    }

    componentDidMount(){
        axios
            .get("http://localhost:5000/friends")
            .then( response => this.setState({friendsList: response.data})) 
            .catch(err => console.log(err));

        console.log(this.state.friendsList);
        console.log("finished fetching");
    }

    render() {
        return(
            <div className="friendsList">
            {this.state.friendsList.map(friend => 
                <Friend friend={friend}/>
            )}
            </div>
        );
    }
}

export default FriendsList; 