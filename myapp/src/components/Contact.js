import React from 'react'
import { Link , Outlet } from 'react-router-dom'

//we will try to use nested routes
function Contact() {
  return (
    <div>
        <Link to = {'insta'} ><h1>Instagram</h1></Link>
        <Link to = {'mail'} ><h1>Email</h1></Link>
        <Outlet/>
    </div>
  )
}

export default Contact