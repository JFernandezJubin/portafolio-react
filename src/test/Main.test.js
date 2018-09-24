import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../main';
import Header from '../containers/layout/header';
import Footer from '../components/footer/footer';
import Data from '../data/data';
import '../index.css';

it('Renders Main App without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Main data={Data} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Renders Header without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header data={Data.en.header} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Renders Footer without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer data={Data.en.footer} />, div);
    ReactDOM.unmountComponentAtNode(div);
});