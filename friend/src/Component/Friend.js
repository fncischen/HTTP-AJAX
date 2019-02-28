import React, { Component } from 'react';

const Friend = (props) => {
    console.log(props.friend);
    console.log(props.friend.id);

    return (
        <div className="friend">
        <ul>
        <li>{props.friend.name}</li>
        <li>{props.friend.age}</li>
        <li>{props.friend.email}</li>
        </ul>

        <button onClick={(e) => props.delete(e, props.friend, props.friend.id)}> Delete </button>
        </div>
    )
}

export default Friend; 