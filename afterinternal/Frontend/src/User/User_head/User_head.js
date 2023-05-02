import React, { useState } from 'react';
import './css/User_head.css'
import Search from '../../Image/search.png'
import {Link} from 'react-router-dom'
function User_head(props) {
  const [selectedOption, setSelectedOption] = useState('');
  const [displayedOption, setDisplayedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setDisplayedOption(event.target.value);
    props.onSelect(event.target.value); // Call the onSelect function passed in as a prop with the selected value
  };
  return (
    <div className='head'>
      <div className='head_main'>
      <div className='head_search'>
      <input className='input_search' type="text" placeholder="Search..." />
      <button className='button' type="submit"><img src={Search} alt='button' className='image' /></button>
      </div>
      </div>
      {/* <div className='location'>
      <label htmlFor="simple-select-box"></label>
      <select id="simple-select-box" value={selectedOption} onChange={handleSelectChange}>
        <option value="">Location</option>
        <option value="mananthavady">mananthavady</option>
        <option value="kozhikode">kozhikode</option>
        <option value="kochi">kochi</option>
      </select>
      </div> */}
      <div>
      <Link to='/Signin' > <button  className='sign'>Sign</button></Link> 
      </div>
    </div>
  )
}

export default User_head







// import React, { useState } from 'react';
// import './css/User_head.css';
// import Search from '../../Image/search.png';
// import { Link } from 'react-router-dom';

// function Header(props) {
//   const [selectedOption, setSelectedOption] = useState('');
//   const [displayedOption, setDisplayedOption] = useState('');

//   const handleSelectChange = (event) => {
//     setSelectedOption(event.target.value);
//     setDisplayedOption(event.target.value);
//     props.onSelect(event.target.value); // Call the onSelect function passed in as a prop with the selected value
//   };

//   return (
//     <div className="head">
//       <div className="head_main">
//         <div className="head_search">
//           <input className="input_search" type="text" placeholder="Search..." />
//           <button className="button" type="submit">
//             <img src={Search} alt="button" className="image" />
//           </button>
//         </div>
//       </div>
//       <div className="location">
//         <label htmlFor="simple-select-box">Select a location:</label>
//         <select id="simple-select-box" value={selectedOption} onChange={handleSelectChange}>
//           <option value="">Location</option>
//           <option value="mananthavady">Mananthavady</option>
//           <option value="kozhikode">Kozhikode</option>
//           <option value="kochi">Kochi</option>
//         </select>
//       </div>
//       <div>
//         <Link to="/Signin">
//           <button className="sign">Sign In</button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Header;
