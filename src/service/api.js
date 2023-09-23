import  axios  from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDA5ZTJmZWVjZjA2YmFhM2UyY2FmMGI1NWEzNmJmMiIsInN1YiI6IjY1MGQ2MDVkM2Q3NDU0MDBlMTI0MzczZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QXgtsJ9Mb6l2QKjUTHQCzb4OfHdUBNZe4Fgw1qWizPA',
  },
};

export const getTrendingMovies = async() => {
    const {data} =await axios
      .get('trending/movie/day', options)
      return data.results
}

export const searchMovies = async query => {
  const response = await axios.get(
    `search/movie?query=${query}&page=1`,
    options
  );
  return response.data;
};

export const getMovieDetails = async id => {
  const response = await axios.get(
    `movie/${id}&language=en-US`, options
  );
  return response.data;
};

export const getCast = async id => {
  const {data} = await axios.get(
    `movie/${id}/credits`,
    options
  );
  return data.cast;
}

export const getRewiews = async id => {
  const { data } = await axios.get(`movie/${id}/reviews`, options);
  return data.results;
};