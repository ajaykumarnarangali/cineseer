import React from 'react'
import '../User_comp/css/Banner.css'
import Upcoming from './Upcoming'
import Nowshow from './Nowshow'
// function Banner() {
//   return (
//     <div className='Banner'>
//       <div className='select'>
//         <button className='buttons'>Now showing</button>
//         <button className='buttons'>Coming soon</button>
//       </div>
//       <div className='lang'>
//       <h1>Language</h1>
//       </div>
//       <div className='movies'>
//       <h1 style={{marginLeft:'400px'}}>Movies in</h1>
      
//       <Nowshow/>
//       <Upcoming/>
//       </div>
//     </div>
//   )
// }

import { useState } from 'react';

function Banner() {
  const [showNowShowing, setShowNowShowing] = useState(true);

  const handleNowShowingClick = () => {
    setShowNowShowing(true);
  }

  const handleUpcomingClick = () => {
    setShowNowShowing(false);
  }

  return (
    <div className='Banner'>
      <div className='select'>
        <button className='buttons' onClick={handleNowShowingClick}>Now showing</button>
        <button className='buttons' onClick={handleUpcomingClick}>Coming soon</button>
      </div>
      <div className='lang'>
        <h1>Language</h1>
      </div>
      <div className='movies'>
        <h1 style={{marginLeft:'400px'}}>Movies in</h1>
        {showNowShowing ? <Nowshow/> : <Upcoming/>}
      </div>
    </div>
  )
}

export default Banner
