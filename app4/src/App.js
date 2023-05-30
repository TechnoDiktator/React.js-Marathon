import logo from './logo.svg';
import './App.css';
import {useState , useEffect , useRef } from "react"
import Header from './components/Header';

function App() {

  const [input  , setInput] = useState("")
  const inputField = useRef()


  const formHandler = (e) => {
    setInput(e.target.value);
  }

  const clickHandler = () => {
    inputField.current.focus();
    inputField.current.value = 'tarang';
    inputField.current.style.border = "2px solid red"


  }

  //ref - It is an attribute which makes it possible to store a reference to particular DOM nodes or React elements

  return (
    <div className="App">
      <Header className = 'header'></Header>
      <input ref={inputField} value={input} onChange={formHandler} ></input>
      <h4>Application has rendered {} times</h4>
      <button onClick={clickHandler} type="" >Click me</button>
    </div>
  );
}

export default App;
