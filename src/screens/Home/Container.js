import {connect} from 'react-redux';
import Component from './Component';
import {createSelector} from 'reselect';
import {
  fetchActionMoviesRequest,
  fetchRomanceMoviesRequest,
  fetchHorrorMoviesRequest,
  fetchTrendingMoviesRequest,
  fetchGenreListRequest,
} from './actions';
import {
  selectActionMovies,
  selectActionMoviesRequesting,
  selectRomanceMovies,
  selectRomanceMoviesRequesting,
  selectHorrorMoviesRequesting,
  selectHorrorMovies,
  selectTrendingMoviesRequesting,
  selectTrendingMovies,
} from './selectors';

const mapStateToProps = createSelector(
  selectActionMovies,
  selectActionMoviesRequesting,
  selectRomanceMovies,
  selectRomanceMoviesRequesting,
  selectHorrorMovies,
  selectHorrorMoviesRequesting,
  selectTrendingMovies,
  selectTrendingMoviesRequesting,
  (
    actionMovies,
    actionMoviesRequesting,
    romanceMovies,
    romanceMoviesRequesting,
    horrorMovies,
    horrorMoviesRequesting,
    trendingMovies,
    trendingMoviesRequesting,
  ) => ({
    actionMovies,
    actionMoviesRequesting,
    romanceMovies,
    romanceMoviesRequesting,
    horrorMovies,
    horrorMoviesRequesting,
    trendingMovies,
    trendingMoviesRequesting,
  }),
);

const mapDispatchToProps = dispatch => ({
  fetchActionMoviesRequest: payload =>
    dispatch(fetchActionMoviesRequest(payload)),
  fetchRomanceMoviesRequest: payload =>
    dispatch(fetchRomanceMoviesRequest(payload)),
  fetchHorrorMoviesRequest: payload =>
    dispatch(fetchHorrorMoviesRequest(payload)),
  fetchTrendingMoviesRequest: payload =>
    dispatch(fetchTrendingMoviesRequest(payload)),
  fetchGenreListRequest: payload => dispatch(fetchGenreListRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
