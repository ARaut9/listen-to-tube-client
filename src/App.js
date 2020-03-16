import React, { useState, useEffect } from 'react';

const App = () => {
  let baseURL;

  if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3001';
  }

  if (process.env.NODE_ENV === 'production') {
    baseURL = 'https://fathomless-temple-89309.herokuapp.com';
  }

  useEffect(() => {
    fetch(`${baseURL}/video`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [baseURL]);

  const [data, setData] = useState(null);

  return <div className='App'>{data ? data.name : 'No video found!'}</div>;
};

export default App;
