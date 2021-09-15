export const selectMovieList = state => state.movieListReducer;

export const selectMovieListGenre = state => selectMovieList(state).genre;
