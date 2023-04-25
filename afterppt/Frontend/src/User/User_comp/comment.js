import React from 'react'
import '../User_comp/css/comment.css'
function comment() {
  return (
    <div>
    <div className='com_main'>
        <div style={{display:'flex'}}>
      <div className='com_score'>
        <span className='com_span'> 86 </span>
      </div>
      <h2 style={{marginLeft:'10px'}}>Name</h2>
      <p className='com_p'>Description</p>
      </div>
    </div>
    <div className='com_main'>
        <div style={{display:'flex'}}>
      <div className='com_score'>
        <span className='com_span'> 86 </span>
      </div>
      <h2 style={{marginLeft:'10px'}}>Name</h2>
      <p className='com_p'>Description</p>
      </div>
    </div>
    </div>
  )
}

export default comment
