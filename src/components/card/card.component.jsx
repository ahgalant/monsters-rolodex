import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className = 'card-container'>
        <img alt="kitty" src={`https://robohash.org/${props.kitty.id}?set=set4&size=300x300`} />
        <h2>{props.kitty.name}</h2>
        <p>@{props.kitty.username}</p>
        <p><i>{props.kitty.email}<br />{props.kitty.phone}</i></p>
    </div>
);