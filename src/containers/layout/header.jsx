import React, { Component } from 'react';
import { Logo } from '../../components/icons/icons';
import { ListItem } from '../../components/header/navbar';

class Header extends Component {
    render() {
        return (
            <div>
                <Logo size='70' viewBox='70' />
                <ListItem title='Language'/>
                <ListItem title='Blog'/>
                <ListItem title='Contact'/>
                <ListItem title='Social'/>
            </div>
        );
    }
}

export default Header;