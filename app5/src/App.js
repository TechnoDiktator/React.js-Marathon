import logo from './logo.svg';
import './App.css';
import Header from './components/components/Header';
import {useState , useEffect} from "react"
import useFetch from './components/useFetch';
// https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001
function App() {

  const [data] = useFetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")

  return (
    <div>
      <Header></Header>
      {
        data.map((element , index) => {
          return (
            <h1 key = {index} >{element.firstName}</h1>
          )
        } )
      }
    </div>
  );
}

export default App;
