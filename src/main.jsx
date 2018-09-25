import React, { Component } from 'react';
import Header from './containers/layout/header';
import Footer from './components/footer/footer';
import { LandingContainer } from './containers/landing-container';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data.en
        };
        this.dataHandler = (e, lang) => {
            this.setState({ data: this.props.data[lang] });
        };
    }
    render() {
        return (
            <div>
                <Header data={this.state.data.header} dataHandler={this.dataHandler}/>
                <LandingContainer data={this.state.data.main} />
                <Footer data={this.state.data.footer}/>
            </div>
        );
    }
}

export default Main;