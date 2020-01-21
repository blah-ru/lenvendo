import React, { Fragment, useState } from 'react';
import './App.css';
import TextList from './components/TextList';

export default function App() {

  const [list, setCount] = useState([]);

  return (
    <Fragment>
      <TextList
        list={list}
      />
    </Fragment>
  );
}


