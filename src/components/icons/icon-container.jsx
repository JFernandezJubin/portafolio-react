import React from 'react';

const IconContainer = (props) => {
    return (
        <svg
            fill={props.color}
            height={props.size}
            width={props.size}
            viewBox={`0 0 ${props.viewBox} ${props.viewBox}`}
            className={props.className}
        >
            {props.children}
        </svg>
    );
};

export default IconContainer;