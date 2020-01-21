import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {

    return (
        <button 
            className={'btn ' + props.className}
            onClick={props.onClick}
        >
            {props.title}
        </button>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string
};

Button.defaultProps = {
    className: '',
    onClick: ()=>{},
    title: ''
};