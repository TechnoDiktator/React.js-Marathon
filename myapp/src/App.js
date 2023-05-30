
import { ReactDOM } from 'react';
import React from 'react';
import { useState , useEffect } from 'react';
import './App.css';
import Header from './Header';
import Movie from './components/Movie';
import movies from './movies.json'



function App(){

  const [state , setState] = useState(1);
  //const [state2 , setState2] = useState(0);
  const [data , setData] = useState([]);


  //useEffect(()=>{
  //  window.alert("useEffect Called")
  //})
  useEffect(()=>{
    //window.alert("useEffect Called")
    async function getData(){
      const get  = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`)
      const res = get.json() 
      setData([res])   //data will contain the res
      console.log(res)
    }

    getData();
    document.title = `(${state})Employees online`

  } , [state])
  //the second arguement is optional if it is not provided then 


  console.log("Function Body")

  return (
    <div>
      <Header></Header>
      {console.log('Inside JSX')}
      <button onClick={() => { setState( state +1) }}>BUTTON{state}</button>
      
      {
      
      data.map(  (element ,index) => {
        return (
          
          <div className='data' key = {index}>
            <h4>{element.firstName}</h4>
            <h4>{element.lastName}</h4>
            <h4>{element.email}</h4>
          </div>

        )
      })
      
      }

    </div>
  )

}




/*
function App(){                                  // 1 is the initial state 
  const [num , setNum] = useState(1); 
  function dec(n){
    setNum(num -n)
  }
  function inc(n){
    setNum(num +n)
  }

  /*NOTE : normally you would pass the fuction reference to the onType event
  but or functions (inc and dec) also requres a parameter input 
  so we packed them inside arrow fuctions 
  and these arrow fuctions are passed as reference reference 
  the inc()  and dec() are called from inside these functions once they are called by the event 
  
  return (
    <div className='"App'>
      <Header></Header>
      <div className='main'>
        <h1 className='heading'>{num}</h1>
        <div className='buttons'>
          <button onClick={  ()=>{ inc(10)  }   }  className='btn'>Increment</button>
          <button onClick={  ()=>{  dec(10)  }  }  className='btn'>Decrement</button>
        </div>   
      </div>
    </div>
  )
}
*/













/*function App() {

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


*/
export default App;
