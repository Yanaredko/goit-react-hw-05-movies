import React, { useEffect } from 'react';
import { getTrendingMovies } from 'service/api';
import { useState } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';



const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  
  
  useEffect(() => {
    getTrendingMovies()
      .then(data => {
         setTrendMovies(data);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
     <MoviesList movies={trendMovies}/>
    </div>
  );
};

export default Home;