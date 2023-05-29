
import { ReactDOM } from 'react';
import React from 'react';
import './App.css';
import Header from './Header';

function App() {

  let name = "Bilawal Bhutto"


  return (
    <div className="App">
      <Header/>
      <h1>{name}</h1>
    </div>
  );
}

export default App;
