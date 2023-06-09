import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './User/page/Home'
import Signin from './Sign/Signin'
import Signup from './Sign/Signup'
import Theatres from './User/page/Theatres'
import Rate from './User/page/Rate'
import Review from './User/page/Reviews'
import Booking from './User/page/Tseat'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Home/>}></Route>
      <Route  path="/Signin" element={<Signin/>}></Route>
      <Route  path="/Signup" element={<Signup/>}></Route>
      <Route  path="/Theatredetails" element={<Theatres/>}></Route>
      <Route  path="/Ratings" element={<Rate/>}></Route>
      <Route path='/Userreview' element={<Review/>} ></Route>
      <Route path='/Ticketbooking' element={<Booking/>}></Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
