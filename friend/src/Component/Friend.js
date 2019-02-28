import React, { Component } from 'react';

const Friend = (props) => {

    console.log(props.delete)

    return (
        <div className="friend">
        <ul>
        <li>{props.friend.name}</li>
        <li>{props.friend.age}</li>
        <li>{props.friend.email}</li>
        </ul>

        <button onClick={() => props.delete(props.friend)} /> 
        </div>
    )
}

export default Friend; 