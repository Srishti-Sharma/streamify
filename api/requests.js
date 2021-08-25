const API_KEY = 'e4318146d8adb35f19d38d21c3b303c7';

const requests = {
  getGenericDiscoverList: `/discover/movie?api_key=${API_KEY}&with_genres=:id`,
  getTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  getTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  getActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  getComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  getHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  getRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  getDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  getGenreList: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
};

export default requests;
