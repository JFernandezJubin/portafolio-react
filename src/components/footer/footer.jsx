import React from 'react';
import { Emoji } from '../icons/icons';

const Footer = props => {
    return (
        <footer className='Footer'>
            {props.data.map(i => {
                return <h6 className={i.className} key={i.id}><a key={i.id} href={i.href} target='_blank' rel='noopener noreferrer'>{i.title}{i.emoji ? <Emoji className='Emoji' symbol={i.emoji} /> : ''}</a></h6>;
            })}
        </footer>
    );
};

export default Footer;