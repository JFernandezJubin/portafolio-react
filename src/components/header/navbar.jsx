import React from 'react';

const UList = props => {
    return (
        <u className='UList'>
            {props.listItem.map(i => {
                return <ListItem {...i} key={i.id}/>;
            })}
        </u>
    );
};

const ListItem = props => {
    return (
        <li className='ListItem'>
            <a href={props.href}>
                <b>{props.title}</b>
            </a>
            {props.dropdown_type === 0 && 
                <Dropdown listItem={props.dropdown}/>
            }
        </li>
    );
};

const Dropdown = props => {
    return (
        <u className='Dropdown'>
            {props.listItem.map(i => {
                return <DropdownListItem {...i} key={i.id}/>;
            })}
        </u>
    );
};

const DropdownListItem = props => {
    return (
        <li className='DropdownListItem'>
            <a href={props.href}>
                <b>{props.title}</b>
            </a>
        </li>
    );
};

export {
    UList
};