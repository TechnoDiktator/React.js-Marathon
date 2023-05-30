import React , {useContext} from 'react'

//directly imported context from app.js .....no props used in componenet
import { AppContextState } from '../App'

function ComC() {

    const C_context = useContext(AppContextState)
    console.log(C_context)

  return (
    <div className='compc'> {/* there is no need to pass props for the data anymore */}
        <div>ComC</div>
        <h1>{C_context.data}</h1>
        <h1>{C_context.name.name}</h1>
        <h1>{C_context.name.age}</h1>
    </div>
  )
}

export default ComC