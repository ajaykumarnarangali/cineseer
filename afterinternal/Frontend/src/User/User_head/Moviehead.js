import React from 'react'
import './css/Movie_head.css'
function Moviehead(props) {
  const { movieName } = props;
const { movieLang } = props;
const { selectedDate } = props;
const { movieLoc } = props;
  return (
    <div className='Moviehead_main'>
      <h1 className='Moviehead_h'>{ movieName }</h1>
      <p className='Moviehead_p'>{ movieLang }.{ selectedDate }</p>
    </div>
  )
}

export default Moviehead
