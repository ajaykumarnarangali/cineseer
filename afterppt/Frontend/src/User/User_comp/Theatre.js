// import { getArticles } from './api.js';
import axios from 'axios';
import React, { useState, useEffect } from 'react';




// import React from 'react'
import './css/Theatre.css'
import Seating from '../User_comp/Seating'

import { getCookie } from './utils';

const csrfToken = getCookie('csrftoken');

axios.defaults.headers.common['X-CSRFToken'] = csrfToken;


// function Theatre() {
//   const [text, setText] = useState('');

//   useEffect(() => {
//     fetch('/get_text/')
//       .then(response => response.json())
//       .then(data => setText(data.text));
//   }, []);

//   return <div>{text}</div>;
// }









// class ArticleList extends React.Component {
//   state = {
//     articles: [],
//   };
//   componentDidMount() {
//     getArticles()
//       .then((response) => {
//         this.setState({ articles: response.data });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
//   render() {
//     // Render your articles here
//   }
// }



// function ArticleList() {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     axios.get('/article-list/')
//       .then(response => setArticles(response.data.articles))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div>
//       {articles.map(article => (
//         <div key={article.title}>
//           <h2>{article.title}</h2>
//           <p>By {article.author}</p>
//           <p>{article.content}</p>
//         </div>
//       ))}
//     </div>
//   );
// }


function Theatre() {
  
    const [abc, setText] = useState('');
  
    useEffect(() => {
      fetch('/my_view/')
        .then(response => response.json())
        .then(data => setText(data.text));
    }, []);
  
   

    const [data, setAbcd] = useState({});

    useEffect(() => {
      axios.get('/get_text/')
        .then(response => setAbcd(response.data))
        .catch(error => console.error(error));
    }, []);


    // const [formData, setFormData] = useState({ myData: '' });
    // const [status, setStatus] = useState(null);
  
    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   axios.post('/my_api_endpoint/', formData)
    //     .then(response => setStatus(response.data.status))
    //     .catch(error => console.error(error));
    // };
  
    // const handleInputChange = (event) => {
    //   const { name, value } = event.target;
    //   setFormData({ ...formData, [name]: value });
    // };
  
    const [formData, setFormData] = useState({ myData: 'hey' });
    const [response, setResponse] = useState('');

   const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Debugging line
    axios.post('/my_api_endpoint/', formData)
      .then(response => setResponse(response.data.status))
      .catch(error => console.error(error));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
   


  return (
    <div className='thea_main'>
    <div className='thea_movie'>
     <h1 style={{margin:'85px 35px',fontSize:'50px'}}>MOVIE NAME</h1>
     <p className='thea_details'>Details</p>
    </div>
    {/* <div>
        <p>Name: {data.name}</p>
        <p>Age: {data.age}</p>
        <p>Email: {data.email}</p>
    </div> */}
    <div className='thea_date'>
      Date
    </div>
    {/* <form onSubmit={handleSubmit}>
      <label htmlFor="myData">Enter your name:</label>
      <input type="text" id="myData" name="myData" value={formData.myData} onChange={handleInputChange} />
      <button type="submit">Submit</button>
      {response && <p>{response}</p>}
    </form> */}
    {/* <div>{abc}</div> */}
    <div className='thea_seat'>
    <Seating/>
    </div>
    </div>
  )
}
export default Theatre
