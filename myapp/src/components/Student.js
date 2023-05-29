import React from 'react'

import Comp from './Comp'
import propTypes from 'prop-types'

function Student(props) {
  return (
    <div>
        <h1>{props.name}</h1>
        <h4>{props.phno}</h4>
        <Comp  name  = {props.name}  phno ={props.phno}  address = "Mirzapur" />
    </div>

  )
}


//propTypes basicaal serves as  a check for the kind of data you are sending to the component in the props
Student.propTypes = {
    name : propTypes.string , 
    phno : propTypes.number ,
}

Student.defaultProps = {
    name : "abc" , 
    phno : 11111111 ,
}




export default Student



/*  This can also be done

function Student({name , phno}) {
  return (
    <div>
        <h1>{name}</h1>
        <h4>{phno}</h4>
    </div>

  )
} 
*/