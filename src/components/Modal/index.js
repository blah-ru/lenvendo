import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';


export default function Modal(props) {

    return (
        <div className='modal'>
            <div className='modal__body'>
                <p className='modal__header'>
                    Подтвердите удаление сложного блока
                </p>
                <div className='modal__buttons'>
                    <Button
                        title='Да'
                        onClick={props.removeFromList}
                    />
                    <Button
                        title='Нет'
                        onClick={props.changeMode}
                    />
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    changeMode: PropTypes.func,
    removeFromList: PropTypes.func
};

Modal.defaultProps = {
    changeMode: ()=>{},
    removeFromList: ()=>{}
};