import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

export default function TextList(props) {

    return (
        <ul className='textList'>
            {props.list.map(item => {
                //При двойном клике, одинарный не должен срабатывать
                let clickCount = 0;
                let singleClickTimer = '';

                const handleClicks=()=>{

                    if (item.easy){
                        props.changeMarkLine(item.id);
                        return;
                    }

                    clickCount++;
                   if (clickCount === 1) {
                        singleClickTimer = setTimeout( ()=>{
                            clickCount = 0;
                            props.changeMarkLine(item.id);
                        }, 250);

                    } else if (clickCount === 2) {
                        clearTimeout(singleClickTimer);
                        clickCount = 0;
                       props.changeColor(item.id);
                    }
                }

                return <li 
                    className={"textList__item " 
                                + (!item.easy ? "textList__item_" + item.color : '')
                                }
                    key={item.id}
                    onClick={() => { handleClicks() }}
                    onMouseDown={e => e.preventDefault()} //Убрать выделение при двойном клике
                    >
                    {item.marked && 
                    <span 
                        className='textList__checked'
                    >
                        V
                    </span>
                    }
                    {item.text}
                    <Button 
                        className='textList__del'
                        title='X'
                        onClick={(e) => { props.removeItem(item); e.stopPropagation();}}
                    />
                </li>
                })
            }
        </ul>
    );
}

TextList.propTypes = {
    list: PropTypes.array,
    removeFromList: PropTypes.func,
    changeMarkLine: PropTypes.func
};

TextList.defaultProps = {
    list: [],
    changeMarkLine: ()=>{},
    removeFromList: ()=>{}
};