import React, { Component } from 'react';
import axios from 'axios';

class UpdateForm extends Component {
    constructor(props){
        super(props)


    }

    render() {
        return(

            <div className="update_form">
                    <h2> Update existing friends </h2>

                        <form onSubmit={this.props.updateFriend}>

                            <select name="selected_id" onChange={this.props.handleChanges}>

                            {this.props.friendsList.map(friend => 
                                <option name="selected_id" value={friend.id}>{friend.name}</option>
                            )}
                            </select>
                        
                            <input type="text" name="updatedEmail" value={this.props.updatedEmail} onChange={this.props.handleChanges}></input>
                            
                            <input type="text" name="updatedAge" value={this.props.updatedAge} onChange={this.props.handleChanges}></input>

                        <button type="submit">Submit</button>
                    
                        
                        </form> 
            </div>

        );
        }
    }

    export default UpdateForm;