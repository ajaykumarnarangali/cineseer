// // import React from 'react'
// import './css/Upcoming.css'
// import Avatar from '../../Image/Avatar.jpg'

// import axios from 'axios';
// import React, { useState, useEffect } from 'react';




// // import React from 'react'
// import './css/Theatre.css'
// // import Seating from '../User_comp/Seating'

// // import { getCookie } from './utils';






// function Upcoming() {



//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetch('/poster/')
//       .then(response => response.json())
//       .then(data => setMovies(data.text));
//   }, []);



//   return (


//     {movies.map((movie) => (
//       <div style={{display:'flex'}}>
//      {/* <div class="card">
//       <div className='img_movie'>
//   <img src={Avatar} alt="Avatar"  style={{display: 'flex', height: '300px',width: '240px',borderRadius:'20px 20px 0px 0px'}}/>
//   </div>
//   <div class="container">
//     <h4><b>Movie name</b></h4>
//     <button className='book'>Book Ticket</button>
//   </div>
// </div> */}
// <div class="card">
//       <div className='img_movie'>
//   <img src={movie.image.url} alt="Avatar"  style={{display: 'flex', height: '300px',width: '240px',borderRadius:'20px 20px 0px 0px'}}/>
//   </div>
//   <div class="container">
//     <h4><b>{movie.name}</b></h4>
//     <button className='book'>Book Ticket</button>
//   </div>
// </div>
// </div>
//     ))}





//     // {dests.map((dest) => (
//     //   <div className="destination item">
//     //     <div className="destination_image">
//     //       <img src={dest.image.url} alt="" />
//     //     </div>
//     //     <div className="destination_content">
//     //       {user.is_authenticated ? (
//     //         <div className="destination_title">
//     //           <a href="destinations/destination">{dest.name}</a>
//     //         </div>
//     //       ) : (
//     //         <div className="destination_title">
//     //           <a href="account/login">{dest.name}</a>
//     //         </div>
//     //       )}
//     //       <div className="destination_subtitle">
//     //         <p>
//     //           {dest.desc}
//     //           {mum.price}
//     //         </p>
//     //       </div>
//     //       <div className="destination_price">From ${dest.price}</div>
//     //     </div>
//     //   </div>
//     // ))}
    


    




   
    
//   )
// }

// export default Upcoming
import './css/Upcoming.css'
import avatar from '../../Image/Avatar2.jpg'
import jaws from '../../Image/Jaws.jpeg'
import inception from '../../Image/Inception.jpeg'
// import jaws from '../../media/jaws-movie-poster_oEJ6qEs.jpeg'
import {Link} from 'react-router-dom'

import axios from 'axios';
import React, { useState, useEffect } from 'react';


// function MoviePoster(props) {
//   return (
//     <img src={props.posterUrl} alt="Movie Poster" />
//   );
// }

function Upcoming() {

 

  const [data, setAbcd] = useState({});

  useEffect(() => {
    axios.get('/get_text/')
      .then(response => setAbcd(response.data))
      .catch(error => console.error(error));
  }, []);


  // const [abc, setText] = useState('');
  // for testsing app accessing
  // useEffect(() => {
  //   fetch('/articles/my_view/')
  //     .then(response => response.json())
  //     .then(data => setText(data.text));
  // }, []);

  // const [def, setTxt] = useState('');
  
  // useEffect(() => {
  //   fetch('/my_view/')
  //     .then(response => response.json())
  //     .then(data => setTxt(data.text));
  // }, []);

  
    // const movie = {
    //   obj1: { name: 'avatar', age: 25 },
    //   obj2: { name: 'jaws', age: 30 },
    //   obj3: { name: 'inception', age: 35 },
      

    // };


    
    const [movie, setMovies] = useState({});

    useEffect(() => {
      fetch('/posterup/')
        .then(response => response.json())
        .then(data => setMovies(data.movie));
    }, []);
  
  
    const movies = Object.entries(movie).map(([key, value]) => ({ key, ...value }));

    // const movies = Object.values(movie).map(movie => ({
    //   key: movie.id,
    //   name: movie.name,
    //   genre: movie.genre,
    //   desc: movie.desc
    // }));
    const posters = { avatar: avatar, jaws: jaws, inception: inception };

    // const posterUrl = '/media/jaws-movie-poster_oEJ6qEs.jpeg';
  return (
    <div style={{ display: 'flex' }}>
    {movies.map((movie) => (
      <div style={{display:'flex'}}>
        <div class="card" key={movie.key}>
          <div className='img_movie'>
          {/* <MoviePoster posterUrl={posterUrl} /> */}
           <Link to='/Ratings'>
           {/* <Link to={{ pathname: '/Ratings', state: { name: movie.name } }}> */}
           {/* {posters[movie.name]}{movie.image} */}
           <img src={posters[movie.name]} alt={movie.name}  style={{display: 'flex', height: '300px',width: '240px',borderRadius:'20px 20px 0px 0px'}}/>
           </Link>
          </div>
          {/* {movie.image} */}
          <div class="container">
            {/* <div>{abc} {def}</div> */}
            <h4><b>{movie.name}</b></h4>
            {/* {movie.desc} {movie['name']} */}
            <Link to='/Theatredetails'> <button className='book'>Book Ticket</button></Link>

          </div>
          {/* <div>
        <p>Name: {data.name}</p>
        <p>Age: {data.age}</p>
        <p>gmail: {data.email}</p>
        <p>url: {data.image}</p>
          </div> */}
        </div>
      </div>
     ))} 
    {/* <div>{def}</div> */}
    </div>
  )
  
}

export default Upcoming