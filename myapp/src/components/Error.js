import React from 'react'
import { useNavigate , Link } from 'react-router-dom'
function Error() {

    const navigate = useNavigate()


  return (
    <>
    <div>Error 404 page nhi mila</div>
    <Link><button onClick={ () => {navigate(-1) }} type="">Go Back </button></Link>
    </>
  )
}

export default Error