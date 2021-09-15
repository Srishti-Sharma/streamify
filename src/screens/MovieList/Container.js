import {connect} from 'react-redux';
import Component from './Component';
import {createSelector} from 'reselect';

import {selectMovieListGenre} from './selectors';
import {fetchMovieByGenreIdRequest} from '../Home/actions';
import {
  selectMovieListRequesting,
  selectMovies,
  selectMovieListError,
} from '../Home/selectors';

const mapStateToProps = createSelector(
  selectMovieListGenre,
  selectMovieListRequesting,
  selectMovies,
  selectMovieListError,
  (movieListGenre, movieListRequesting, movieListArr, MovieListError) => ({
    movieListGenre,
    movieListGenre,
    movieListRequesting,
    movieListArr,
    MovieListError,
  }),
);

const mapDispatchToProps = dispatch => ({
  fetchMovieByGenreIdRequest: payload =>
    dispatch(fetchMovieByGenreIdRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
