import React from 'react';

const ListItem = props => {
    return (
        <li style={{
            display: 'inline',
            
        }}>
            <a href={props.href}>
                <b>{props.title}</b>
            </a>
        </li>
    );
};

export {
    ListItem
};