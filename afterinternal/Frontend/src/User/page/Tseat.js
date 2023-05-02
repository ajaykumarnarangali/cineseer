import React from 'react'
import Moviehead from '../User_head/Moviehead'
import Tseats from '../User_comp/Tseats'
import { useLocation } from 'react-router-dom';
function Tseat(props) {

  const location = useLocation();
  const movieName = location.state?.movieName;
  const selectedDate = location.state?.selectedDate;
  const movieLang = location.state?.movieLang;
  // const movieLocation = location.state?.selectedOption;


  
  React.useEffect(() => {
    console.log('location from', location);
    console.log('movie name:', movieName);
    console.log('movie selectedDate:', selectedDate);
    console.log('movie movieLang:', movieLang);
  }, [location, movieName,selectedDate,movieLang]);
  return (
    <div>
      <Moviehead movieName={movieName} selectedDate={selectedDate}  movieLang={movieLang}/>
      <Tseats/>
    </div>
  )
}

export default Tseat
