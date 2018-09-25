import React, { Component } from 'react';
import Utils from '../js/services/utils/utils';

const utils = new Utils();

class LandingContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        };
        this.wordChanger = () => {
            let words = this.state.data.about.words;
            let counter = 0;
            let addingWord = false;
            let word = this.state.data.about.text.slice(20, 29);
            let word2 = this.state.data.about.text.slice(20, 29);
            let data = this.state.data;
            setInterval(() => {
                if (word.length > 0 && !addingWord) {
                    word = word2.slice(0, -1);
                    data.about.text = data.about.text.replace(word2, word);
                    word2 = word;
                    this.setState({ data });
                } else {
                    addingWord = true;
                }
                if (addingWord) {
                    if (word.length < words[counter].length) {
                        word = words[counter].slice(0, word.length + 1);
                        if (word2 === '') {
                            data.about.text = utils.insert(data.about.text, 20, word);
                        } else {
                            data.about.text = data.about.text.replace(word2, word);
                        }
                        word2 = word;
                        this.setState({ data });
                    } else {
                        if (counter < words.length) { counter++; }
                        addingWord = false;
                    }
                }
                if (counter === words.length) {
                    counter = 0;
                }
            }, 300);
            setInterval(() => {
                if (word !== '') {
                    if (this.state.data.about.text.includes('|')) {
                        data.about.text = this.state.data.about.text.replace('|', '');
                        this.setState({ data });
                    } else {
                        data.about.text = utils.insert(this.state.data.about.text, this.state.data.about.text.indexOf(word) + word.length, '|');
                        this.setState({ data });
                    };
                };
            }, 500);
        };
    };
    componentDidMount () {
        this.wordChanger();
    }
    componentDidUpdate (newProps, state) {
        if (this.state.data !== newProps.data) {
            this.setState({data: newProps.data});
            this.wordChanger();
        }
    }
    render () {
        return (
            <section>
                <div>
                    <img src={this.state.data.banner.src} alt="" width='100%'/>
                </div>
                <SectionContainer title={this.state.data.about.title}>
                    <p>
                        {this.state.data.about.text.split('\n').map(i => {
                            if (i.includes('get in touch')) {
                                let f = i.slice(0, i.indexOf('get in touch'));
                                let l = i.slice(i.indexOf('get in touch'));
                                return <span key={Math.random()}>{f}<a
                                    style={{
                                        textDecoration: 'none',
                                        color: '#4a4a4a',
                                        borderBottom: '2px solid #ded706'
                                    }}
                                    href='mailto:omarefg92@gmail.com'>{l}</a></span>;
                            } else {
                                return <span key={Math.random()}>{i}<br/><br/></span>;
                            }
                        })
                        }
                    </p>
                </SectionContainer>
            </section>
        );
    }
};

const SectionContainer = (props) => {
    return (
        <div className='SectionContainer'>
            <h4><b>{props.title}</b></h4>
            {props.children}
        </div>
    );
};

export {
    LandingContainer
};