import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {useState , useEffect , createContext} from "react"
import ComA from './components/ComA';
import ComB from './components/ComB';
import ComC from './components/ComC';


//this is the context of our app
const AppContextState = createContext();
/* why we are using this  ??????
Supppose you have to send data to nested component from the outermost 
component
for this you will have to pass the data in the form of props to all the components in between 
this is very inefficient 
to prevent this we use createContext
*/
function App() {

  //this way we can store anything in form of a context
  //you can even send a setter function !!!!1
  

  const [data , setData] = useState("Tarangi")
  const [name , setName] = useState({name: 'shubham' , age : 20})

  return(

    <div className="App">

      {/* we have stred the data , name object in the prop of our context element....thats it */}
      <AppContextState.Provider value= {{data , name}}>
      <Header></Header>
      <ComA></ComA> {/* there is no need to pass props for the data anymore */}
      </AppContextState.Provider>
    </div>
  )
}

export default App;
export {AppContextState}
