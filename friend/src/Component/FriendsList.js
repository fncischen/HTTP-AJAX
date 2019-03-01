import React, { Component } from 'react';
import axios from 'axios';

import Friend from './Friend';
import AddFriendForm from "./AddFriendForm";
import UpdateForm from "./UpdateForm";

class FriendsList extends Component {
    constructor() {
        super();

        this.state = {
            friendsList: [],
            // oh wait we don't have to this anymore
            newName: "",
            newAge: "",
            newEmail: "",
            selected_id: "",
            updatedAge: "",
            updatedEmail: ""
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
        

        console.log("added friends");
    }

    updateFriend = e => {
        console.log(this.state.selected_id);
        axios     
        .put(`http://localhost:5000/friends/${this.state.selected_id}`,
        {age: this.state.updatedAge,
        email: this.state.updatedEmail})
        .then(response => {
            this.setState({friendsList: response.data})
         })
        .catch(err => {
            console.log(err);
        });
    }

    deleteFriend = (e, a_friend, a_id) => {
        e.preventDefault();

        console.log(a_friend);

        axios
            .delete(`http://localhost:5000/friends/${a_id}`)
            .then(response => this.setState({friendsList: response.data}))
            .catch(err => console.log(err))

        console.log(this.state.friendsList);
    }


    handleChanges = e => {
        e.preventDefault();

        this.setState({[e.target.name]: e.target.value});
        console.log(e.target.name,e.target.value);
    }

    // leave question on anon function 
    componentDidMount(){
        axios
            .get("http://localhost:5000/friends")
            .then( response => 
                this.setState({friendsList: response.data})
            ) 
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

         <AddFriendForm addFriends={this.addFriends} handleChanges={this.handleChanges}/>   
         <UpdateForm updateFriend={this.updateFriend} friendsList={this.state.friendsList} handleChanges={this.handleChanges} />

        </div>
        );
    }
}

export default FriendsList; 