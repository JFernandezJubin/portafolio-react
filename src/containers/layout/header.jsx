import React, { Component } from 'react';
import { Logo } from '../../components/icons/icons';
import { UList } from '../../components/header/navbar';
import Data from '../../data/header/navbar.json';

class Header extends Component {
    render() {
        return (
            <div>
                <Logo size='70' viewBox='70' />
                <UList listItem={Data.navBarButtons}/>
            </div>
        );
    }
}

export default Header;