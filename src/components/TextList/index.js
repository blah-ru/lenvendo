import React from 'react';
import PropTypes from 'prop-types';

export default function TextList(props) {

    return (
        <ul className='textList'>
            {props.list.map(item => <li className="textList_item">{item}</li>)}
        </ul>
    );
}

TextList.propTypes = {
    list: PropTypes.array
};

TextList.defaultProps = {
    list: []
};