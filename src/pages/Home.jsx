import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Topic from '../Topic';

const Home = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios.get(`https://api.unsplash.com/topics/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS}`)
      .then(res => setTopics(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <div className="container">
        <h1>Mes images Unsplash</h1>
        <div className='row'>
          {topics.map(topic => <Topic topic={topic} key={topic.id} />)}
        </div>
      </div>
    </div>
  );
}

export default Home