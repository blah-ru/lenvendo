import React, { useState } from 'react';
import './App.css';
import TextList from './components/TextList';
import Button from './components/Button';
import Header from './components/Header';
import Modal from './components/Modal';

export default function App() {

  const [list, changeList] = useState([]);
  const [isEasy, changeEasy] = useState(true);
  const [newId, changeLastId] = useState(0);
  const [modalMode, changeMode] = useState({  isModal:false,
                                              item: undefined
                                            });

  const addToList = ()=>{

    const itemNew = {
      text:   makeNewLine(),
      marked: false,
      easy:   isEasy, 
      color:  !isEasy ? 'red' : '', 
      id:     newId
    }
    const listNew = [...list, itemNew];
    
    changeList(listNew);
    changeLastId(newId+1);
  }

  const removeItem = (item)=>{
    if (item.easy){
      removeFromList(item);
    }else{
      openModal(item)
    }
  }

  const removeFromList = (item)=>{
    const listNew = list.filter(listItem => listItem !== item);
    changeList(listNew);
  }

  const makeNewLine = ()=>{

    const alphabet  = 'abcdefghijklmnopqrstuvwxyz ';
    const length    = Math.random() * 20;
    let   word      = '';
    
    for (let i = 0; i < length; i++) {
      word += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
    }

    return word;
  }

  const changeEasyTrue = ()=>{
    changeEasy(true)
  }

  const changeEasyFalse = ()=>{
    changeEasy(false)
  }

  const changeMarkLine = (id)=>{
    const listNew = list.map(item => {
      if(item.id === id){
        item.marked = !item.marked;
      };
      return item;
    });
    changeList(listNew);
  }

  const changeColor = (id)=>{
    const listNew = list.map(item => {
      if (item.id === id) {
        item.color = item.color==='red' ? 'green' : 'red';
      };
      return item;
    });
    changeList(listNew);
  }

  const openModal = (item)=>{
    changeMode({
      isModal: true,
      item: item
    });
  }

  const closeModal = ()=>{
    changeMode({
      isModal: false,
      item: undefined
    });
  }

  return (
    <div className='container'>
      <Header
        addToList={addToList}
        changeEasyTrue={changeEasyTrue}
        changeEasyFalse={changeEasyFalse}
        isEasy={isEasy}
        list={list}
    />
      <TextList
        list={list}
        removeItem={removeItem}
        changeMarkLine={changeMarkLine}
        changeColor={changeColor}
      />
      {modalMode.isModal &&
      <Modal
        changeMode={closeModal}
        removeFromList={() => { removeFromList(modalMode.item); closeModal()} }
    />}
    </div>
  );
}


