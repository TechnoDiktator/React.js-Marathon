import React ,  {useState  , useEffect }from 'react'

function useFetch(url) {

    const [data , setData] = useState([])

    useEffect(() => {
      async function getData(){
        const call = await fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
        const resp = await call.json();
        setData(resp)
      }
  
      getData();
    } , [])

  return [data]
}

export default useFetch