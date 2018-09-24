import React, { Component } from 'react';
import Header from './containers/layout/header';
import Footer from './components/footer/footer';

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
                <Footer data={this.state.data.footer}/>
            </div>
        );
    }
}

export default Main;