import logo from './logo.svg';
import './App.css';
import {useState , useEffect , useMemo} from 'react'
import Header from './components/Header';
function App() {

  const [count , setCOunt] = useState(0)
  const [name , setCName] = useState("")

  //This is any expensive calculation
  const expensiveCalculation = (num) =>{
    console.log("Calculating")
    for(let i = 0  ; i<1000000000 ; i++){
      return num
    }
  } 


  const calculation  = useMemo(() =>{
    //react has memorozed the value of this function 
    //hence by using useMemo
    //it will not do the expensive calculation anymore
    expensiveCalculation(count)

  } , [name])

  //Everytime an event happens inside a component 
  //the entire component is rerendered and hence 
  //expensive calculation happens
  //this makes our app slow
  //to prevent this we use useMemo to meorize the result if the exoensive calculation
  //the first time our component is rendered
  //this prevents the expensive calculation from running again
  //hence the name useMemo 
  return (
    <div className="App">
      <Header></Header>
      <button onClick={() => {setCOunt(count +1)}} type="" >Click me</button> 
      <h1>Count: {count}</h1>

      <input onChange={(e) => setCName(e.target.value)} />
      <h1>Name : {name}</h1> 
    </div>
  );
}

export default App;
