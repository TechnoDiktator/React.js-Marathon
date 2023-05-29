
import { ReactDOM } from 'react';
import React from 'react';
import './App.css';
import Header from './Header';
import Student from './components/Student';
import Movie from './components/Movie';
import movies from './movies.json'

function App() {

  let name = "BB"

  let login = true

/*
  in javascript you can write if else condition
  in JSX you have to use ternary operator
  if(login == false) {
    return (
      <h1>You are not logged in</h1>
    )
  }
*/
  return (
    <div className="App">
      {
        //login == false ? <h1  style={{color: "black"}} >You cannot login</h1> :<div>Hi sooogar</div>
        
        //this is how you rite javascript inside jsx
        (()=>{
          if(login == true){
            return <h1 style={{color : "black"}}>Hi Bro</h1>
          }else{
            return <h1 style={{color:"black"}}>Log in bro</h1>
          }
        })()
      }

      <Header/>
      <div className="main">
        {
          movies.map((element , index) => {
            
            return(
              <Movie 
                key = {index}
                title = {element.Title} 
                year = {element.Year}
                poster = {element.Poster} 
              />
            )

          })
        }
        

        <Movie/>

      </div>
    </div>
  );
}

export default App;
