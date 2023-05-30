import React from 'react'
import { Link } from 'react-router-dom';
import { useState , useEffect  } from 'react';
import { useParams , useSearchParams } from 'react-router-dom';

function Userdetails() {

    //we passed queryparam called userId
    //we will use the data used in that param
    const {userId} = useParams();
    const [data , setData] = useState({});


    //this is used to extract the url params we pass and put them in a state function
    //eg - if we passed a name ans age   params in our url
    const [searchParams , setSearchParams] = useSearchParams()

    console.log(searchParams.get('name') + "the duck");
    console.log(searchParams.get('age') + "the duck");
    

    const reset = () => {
        setSearchParams({}); //will set the search params as null
    }



    //useEffect(()=>{
    //  window.alert("useEffect Called")
    //})
    useEffect(()=>{
      //window.alert("useEffect Called")
      async function getData(){
        const get  = await fetch(`https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${userId}`)
        const res = await get.json() 
        setData(res[0])   
        
      }
      getData();
    })

  return (
    <>
        <h4>{data.id}</h4>
        <img src =  {data.imageUrl}/>
        <h4>{data.firstName}</h4>
        <h4>{data.lastName}</h4>
        <h4>{data.email}</h4>
        <h4>{data.contactNumber}</h4>
        <h4>{data.dob}</h4>
        <button onClick={() => { reset() }}>Reset</button>
    </>

  )
}

export default Userdetails