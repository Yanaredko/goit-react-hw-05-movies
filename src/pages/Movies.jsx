import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'service/api';
 

const Movies = () => {
  const [searchParams, setSerchParams] = useSearchParams()
  const [moviesList, setMoviesList] = useState([]);
 
 const movieName = searchParams.get('movieName');

  useEffect(() => {

   if(!movieName) return

    searchMovies(movieName).then(data => {
      setMoviesList(data.results);
    });
  }, [movieName]);
   

const onChangeQuery = query => {
  setSerchParams({movieName: query})
}


  return (
    <div>
      <SearchForm onChangeQuery={onChangeQuery} />
      <MoviesList movies={moviesList}/>
    </div>
  );
};
export default Movies;