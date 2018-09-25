import React, { Component } from 'react';
import { Logo } from '../../components/icons/icons';
import UList from '../../components/header/navbar';
class Header extends Component {
    render() {
        return (
            <header>
                <div className="HeaderContainer">
                    <Logo size='70' viewBox='70' />
                    <UList listItem={this.props.data.navbar} dataHandler={this.props.dataHandler}/>
                </div>
            </header>
        );
    }
}

export default Header;