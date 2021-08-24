import {connect} from 'react-redux';
import Component from './Component';
import {createSelector} from 'reselect';

import {selectMovieListGenre} from './selectors';
import {
  fetchActionMoviesRequest,
  fetchRomanceMoviesRequest,
  fetchHorrorMoviesRequest,
} from '../Home/actions';
import {
  selectActionMoviesRequesting,
  selectActionMovies,
  selectRomanceMovies,
  selectRomanceMoviesRequesting,
  selectHorrorMovies,
  selectHorrorMoviesRequesting,
} from '../Home/selectors';

const mapStateToProps = createSelector(
  selectMovieListGenre,
  selectActionMoviesRequesting,
  selectActionMovies,
  selectRomanceMoviesRequesting,
  selectRomanceMovies,
  selectHorrorMoviesRequesting,
  selectHorrorMovies,
  (
    movieListGenre,
    actionMoviesRequesting,
    actionMovies,
    romanceMoviesRequesting,
    romanceMovies,
    horrorMoviesRequesting,
    horrorMovies,
  ) => ({
    movieListGenre,
    actionMoviesRequesting,
    actionMovies,
    romanceMoviesRequesting,
    romanceMovies,
    horrorMoviesRequesting,
    horrorMovies,
  }),
);

const mapDispatchToProps = dispatch => ({
  fetchActionMoviesRequest: payload =>
    dispatch(fetchActionMoviesRequest(payload)),
  fetchRomanceMoviesRequest: payload =>
    dispatch(fetchRomanceMoviesRequest(payload)),
  fetchHorrorMoviesRequest: payload =>
    dispatch(fetchHorrorMoviesRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
