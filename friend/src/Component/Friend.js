import React, { Component } from 'react';

const Friend = (props) => {
    return (
        <div className="friend">
        {props.friend.name}
        {props.friend.age}
        {props.friend.email}
        </div>
    )
}

export default Friend; 