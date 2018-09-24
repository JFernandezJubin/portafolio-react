import React from 'react';
import IconContainer from './icon-container';

const Logo = props => {
    return (
        <IconContainer {...props}>
            <title>Omar Flores Grimontt</title>
            <image xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAclBMVEUAAADf1w3d1g7d1g7e1w3d1g/d1w3d1g748ADd1g7e1g3d1g/d1w7d1g7e1g3j3wDl2gve1wzd1g7d1g7d1g7g2Azd1g7d1w7e1grd1g7d1g3d1g7d1g/d1g7d1g7d1g7i2Qnd1g7e1w3d1g/d1g////9VZgt7AAAAJHRSTlMARu3HT9FV1gTbXuBn5m4LEzG2r3YoqX0ho4Se84qY+BqRO74AP9J2AAAAAWJLR0QlwwHJDwAAAAd0SU1FB+IJEg8HI4YiTcQAAAGMSURBVFjD7ddtjoIwEIDhUVdxRVFUFD9Awd7/jFvW2BnZlrbT/tnEOcCTCQmZtwCfsc4oDjOefEVhhJjOojBCJLN5DEaI70UUpoNCNlKMEGnARoSR0JK70S8zVdAqW/OZTb4NhJ4MQL5T0HjvD70YgOKA0NEXQiYIogxAeULovGEzEroo6Fq5Q31GQvXNH/rLANwRujVukI4B2DQI1Xc2I6HqilDJZiR0VpC42CAz00H4455KNgOwPiJ0KNiMhPZOkI3poJWCdjmbkVCWKmibs5ke1LIZgPkSoUfLZuQsEJqM+AzMF4kJ8mHkNHhGajYzmuA27wXhwRBk2s8QZ6YdQJyZ9oGIrmOcGIIk+hhyYMhJTUxFZWUoYm4XC0OQwQAaZMhht1TUAFM4IwMMOeipvecMDEVcEkzLkCJw7DgN449oGJIUaeZclD2Gh/QYkhKeJUkYPkKYe8NHFEOChtOzT6aowpDem4GLvDP+Va1hAhBkgpAXc/VKcgMTjHRMBAQg9XgYDEzQh/3Mv5kfgAtuI9LYC7gAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDktMThUMTU6MDc6MzUtMDc6MDAcCQriAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA5LTE4VDE1OjA3OjM1LTA3OjAwbVSyXgAAAABJRU5ErkJggg==" />
        </IconContainer>
    );
};

const Emoji = props => {
    return (
        <span className={props.className} role='img' aria-label={props.label ? props.label : ''} aria-hidden={props.label ? 'false' : 'true'}>
            {props.symbol}
        </span>
    );
};

export {
    Logo,
    Emoji
};