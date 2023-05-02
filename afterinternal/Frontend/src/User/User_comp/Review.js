import React from 'react'
import './css/Review.css'
import Comment from './comment'
function Review() {
  return (
    <div className='review'>
    <div className='rev_rate'>
   <div> <h1 style={{marginTop: '0px',marginLeft:'250px'}}>USER REVIEWS</h1></div>
    <div className='rev_score'>
    <div style={{background:'transparent'}}>
    <div className='score'><span className='rev_span'> 85</span></div> <label className='rev_label'>Based on <br></br>Ratings</label>
    </div>
    <div style={{background:'transparent'}}>
      <div className='rev_color' style={{background:'#66CC33'}}></div><span className='rev_colspan'>Positive:<b>14000</b></span>
      <div className='rev_color' style={{background:'#FFCC33'}}></div><span className='rev_colspan'>Mixed:<b>15,234</b></span>
      <div className='rev_color' style={{background:'#FF0000'}}></div><span className='rev_colspan'>Negative:<b>2,344</b></span>
    </div>
    </div>
    </div>
    <div className='rev_review'>
     <div className='a'>
      <h2 style={{marginTop: '10px',marginLeft: '15px'}}>Review this movie</h2>
     </div>
     <div className='b'>
      <form>
        <div className='b_score'>
            <label>Enter your score:</label>
            <input type='number' required style={{height:'60px', width:'70px',borderRadius:'20px'}}></input>
        </div>
        <div >
         <input type='text' className='b_enter'></input>
        </div>
        <div>
            <button className='rev_button'>Submit</button>
        </div>
      </form>
     </div>
    </div>
    <div className='rev_review'>
     <div className='a'>
      <h2 style={{marginTop: '10px',marginLeft: '15px'}}>User score</h2>
     </div>
     <div className='rev_see'>
     <Comment/>
     </div>
    </div>
    </div>
  )
}

export default Review
