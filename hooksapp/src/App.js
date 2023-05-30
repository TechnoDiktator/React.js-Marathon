import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { TextField  , Button , Stack} from '@mui/material';
import { AccessAlarm, ThreeDRotation , Add , Delete } from '@mui/icons-material';
import { useState } from 'react';
import Fields from './components/Fields';
function App() {

  //const [name , setName] = useState("");
  //const [email , setEmail] = useState("");

  const [form , setForm] = useState({})
  //empty array that will add our added entries
  const [data , setData] = useState([])
  
  function addData(e){
    
    //see that we have used the spread operator si that previous entries also retained a part of 
    setData(  [...data ,  form] );
    
    console.log(form.person_name)
    console.log(form.person_email)
    setForm(form);
    console.log("Added") 
    console.log(data.length)
    //setName("")
    //setEmail("")
  }

  //for removing 
  const removeItem = (index) => {
    let arr = data
    arr.splice(index , 1);
    setData([...arr])

  }

  //if you press enter in the input fields that recorsd will be added
  const handlePress = (event) =>{
    if(event.key == 'Enter'){
      addData()
    }
  }

  return (


     
    <div className="App">
      
      <Header></Header>
      <div className='form'>
        <Stack direction = "row"  spacing = {2}>
        <TextField onKeyPress={(event) => { handlePress(event) }}  onChange={(event) => { setForm( {...form ,   person_name:event.target.value} )    }}   value={form.person_name} id="outlined-basic" label="name" variant="outlined" />  
        <TextField onKeyPress={(event) => { handlePress(event) }}  onCopy={ () => {window.alert("copy mat kar bey")} } onChange={(event) => { setForm(  {...form , person_email : event.target.value}  )   }}  value={form.person_email} id="two" label="email" variant="outlined" />  
        <Button draggable onDrag={() => console.log("gradded") }    onDoubleClick={ () => { window.alert("double clicked")} } onClick={addData} color = "success"  variant="contained"><Add/></Button>
        
        </Stack>
      </div>    

      <div className='data'>
        <div className='data_val'>
          <h4>Name</h4>  
          <h4>Email</h4>  
          <h4>Remove</h4>  
        </div>
        
        {
          data.map((element , index)=>{
            return (
                            
              <div key = {index}  className='data_val'>
              <h4>{element.person_name}</h4>  
              <h4>{element.person_email}</h4>  
              <Stack>
              <Button variant = "contained" color= "error"  onClick={ () => { removeItem(index) } }><Delete></Delete></Button>  
              </Stack>
              </div>
            )

          })
        }
      </div>  
    </div>




  );
}

export default App;
