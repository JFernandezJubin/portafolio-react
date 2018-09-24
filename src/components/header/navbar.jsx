import React from 'react';

const UList = props => {
    return (
        <ul className='UList'>
            {props.listItem.map(i => {
                return <ListItem {...i} key={i.id} dataHandler={props.dataHandler}/>;
            })}
        </ul>
    );
};

const ListItem = props => {
    return (
        <li className='ListItem'>
            <a href={props.href}>
                <b>{props.title}</b>
            </a>
            {props.dropdown_type === 0 && 
                <Dropdown listItem={props.dropdown} dataHandler={props.dataHandler}/>
            }
            {props.dropdown_type === 1 &&
                <IconsDropdown listItem={props.dropdown}/>
            }
        </li>
    );
};

const Dropdown = props => {
    return (
        <ul className='Dropdown'>
            <li className='DropdownListItem'>
                {props.listItem.map(i => {
                    return <a href={i.href} key={i.id} onClick={e => props.dataHandler(e, i.language_handler)}>{i.title}</a>;
                })}
            </li>
        </ul>
    );
};

const IconsDropdown = props => {
    return (
        <ul className='IconsDropdown'>
            {props.listItem.map(i => {
                return <li className='IconsDropdownListItem' key={i.id}><a href={i.href} target='_blank' rel='noopener noreferrer' key={i.id}><i className={i.className} key={i.id}/></a></li>;
            })}
        </ul>
    );
};

export default UList;