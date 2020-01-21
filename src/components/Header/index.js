import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';


export default function Header(props) {

    return (
        <div className='header'>
            <div className='header__info'>
                <span className='header__text'>
                    Текстовых блоков: 
                    <span className='bold'>
                        {props.list.length}
                    </span>
                </span>
                <div className='header__info-marked'>
                    <span className='header__text'>
                        Выделенных блоков: 
                        <span className='bold'>
                            {props.list.filter(item => item.marked).length}
                        </span>
                    </span>
                    <span className='header__text'>
                        из выделенных - количество красных: 
                        <span className='bold'>
                            {props.list.filter(item => item.marked && item.color === 'red').length}
                        </span>
                    </span>
                    <span className='header__text'>
                        из выделенных - количество зеленых: 
                        <span className='bold'>
                            {props.list.filter(item => item.marked && item.color === 'green').length}
                        </span>
                    </span>
                </div>
            </div>
            <div>
                <Button
                    title='Добавить'
                    onClick={props.addToList}
                />
                <label>
                    <input
                        type='radio'
                        value='simple'
                        checked={props.isEasy}
                        onClick={props.changeEasyTrue}
                        readOnly
                    />
                    Простой
                </label>
                <label>
                    <input
                        type='radio'
                        value='hard'
                        checked={!props.isEasy}
                        onClick={props.changeEasyFalse}
                        readOnly
                    />
                    Сложный
                </label>
            </div>
        </div>
    );
}

Header.propTypes = {
    addToList: PropTypes.func,
    changeEasyTrue: PropTypes.func,
    changeEasyFalse: PropTypes.func,
    isEasy:PropTypes.bool
};

Header.defaultProps = {
    addToList: ()=>{},
    changeEasyTrue: ()=>{},
    changeEasyFalse: ()=>{},
    isEasy: true
};