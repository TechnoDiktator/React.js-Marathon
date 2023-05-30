import React from 'react'
import ComB from './ComB'

{/* there is no need to pass props for the data anymore */}
function ComA() {
  return (
    <div className='compa'>
    <div>ComA</div> {/* there is no need to pass props for the data anymore */}
    <ComB ></ComB>
    </div>
  )
}

export default ComA