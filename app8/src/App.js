import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'
import Comp1 from './Comp1';
class App extends React.Component {
  



  render(){  
    //can write any logic here 
    return (
      
      <>
      <h1>Class Based COmponenet</h1>
      <h1>Tutorial</h1>
      <Comp1 name = "Tarang" ></Comp1>
      </>

    );
  }
}

export default App;
