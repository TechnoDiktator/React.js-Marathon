import React from 'react'
import { ReactDOM } from 'react';
import { useState , useEffect } from 'react';

import { Link , Outlet } from 'react-router-dom';




function Home() {
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
        const res = await get.json() 
        setData(res)   //data will contain the res
        console.log(data)
      }
  
      getData();
      document.title = `(${state})Employees online`
  
    } , [state])
    //the second arguement is optional if it is not provided then 
    return (    
    <div>

    <button className='btn' onClick={() => { setState( state +2) }}>BUTTON {state}</button>
        {
        
        data.map(  (element ,index) => {
            return (  
            <Link to={`/app/${element.id}`}>
                <div className='data' key = {index}>
                    <h4 className='data_val' >Hi' </h4>
                    <h4 className='data_val'>{element.firstName}</h4>
                    <h4 className='data_val'>{element.lastName}</h4>
                    <h4 className='data_val'>{element.email}</h4>
                </div>
            </Link>
            

            )
        })
        }
        
    </div>
  )
}

export default Home