import React from 'react'
import image from "../images/poster1.jpg"









function Movie(props) {
  return (
    <div className='movie'>
        <img src= {props.poster} alt="" />
        <p>{props.title}</p>
        <p>Year : {props.year}</p>

    </div>
  )
}

export default Movie