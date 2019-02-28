import React, { Component } from 'react';
import axios from 'axios';

import Friend from './Friend';

class FriendsList extends Component {
    constructor() {
        super();

        this.state = {
            friendsList: [],
            // oh wait we don't have to this anymore
            newName: "",
            newAge: "",
            newEmail: ""
        }
    }

    // add event handler 
    // https://alligator.io/react/axios-react/
    addFriends = e => {
        e.preventDefault();

        // condition // is this.state.newName == 

        const newFriend = {
            name: this.state.newName,
            age: this.state.newAge,
            email: this.state.newEmail
        }

        // console.log(axios.get(`http://localhost:5000/friends/?name=${this.state.newName}`).then(response => response.data.filter(friend => friend.name == this.state.newName)));

        if (axios.get(`http://localhost:5000/friends/?name=${this.state.newName}`)) {
            axios.put('http://localhost:5000/friends', {
                name: this.state.newName,
                age: this.state.newAge,
                email: this.state.newEmail
            })

            this.setState({friendsList: [this.state.friendsList.filter(friend => friend.name != this.state.newName), newFriend]});
        }
        
        else {
            axios.post('http://localhost:5000/friends', {
                name: this.state.newName,
                age: this.state.newAge,
                email: this.state.newEmail
            })
            .then(function(response) {
                console.log(response, "Test!");
            })
            .catch(function(error) {
                console.log(error);
            })
    
            this.setState({friendsList: [... this.state.friendsList, newFriend]});
        }

        console.log("added friends");
    }

    deleteFriend = a_friend => {

        console.log(a_friend);

        axios
            .delete('http://localhost:5000/friends', {
                a_friend
            })
            .then(console.log("Remove friend"))
            .catch(err => console.log(err))

        this.setState({friendsList: this.state.friendsList.filter(friend => friend != a_friend)});
    }


    handleChanges = e => {
        e.preventDefault();

        this.setState({[e.target.name]: e.target.value});
        console.log(this.state);
    }

    componentDidMount(){
        axios
            .get("http://localhost:5000/friends")
            .then( function(response) { 
                console.log(response);
                this.setState({friendsList: response.data});
            }) 
            .catch(err => console.log(err));

        // response is what we get from browser; 

        console.log(this.state.friendsList);
        console.log("finished fetching");
    }


    // https://reactjs.org/docs/forms.html
    render() {
        return(
            <div className="friendsList">
            {this.state.friendsList.map(friend => 
                <Friend friend={friend} delete={this.deleteFriend}/>
            )}

            <div className="Form">
                <form onSubmit={this.addFriends}>
                    <input type="text" name="newName" value={this.state.newName} onChange={this.handleChanges}></input>
                    <input type="text" name="newEmail" value={this.state.newEmail} onChange={this.handleChanges}></input>
                    <input type="text" name="newAge" value={this.state.newAge} onChange={this.handleChanges}></input>

                    <button type="submit">Submit</button>
                </form>
            </div>

            </div>
        );
    }
}

export default FriendsList; 