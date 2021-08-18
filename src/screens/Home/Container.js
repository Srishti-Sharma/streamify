import {connect} from 'react-redux';
import Component from './Component';
import {createSelector} from 'reselect';
import {
  fetchActionMoviesRequest,
  fetchRomanceMoviesRequest,
  fetchHorrorMoviesRequest,
} from './actions';
import {
  selectActionMovies,
  selectActionMoviesRequesting,
  selectRomanceMovies,
  selectRomanceMoviesRequesting,
  selectHorrorMoviesRequesting,
  selectHorrorMovies,
} from './selectors';

const mapStateToProps = createSelector(
  selectActionMovies,
  selectActionMoviesRequesting,
  selectRomanceMovies,
  selectRomanceMoviesRequesting,
  selectHorrorMovies,
  selectHorrorMoviesRequesting,
  (
    actionMovies,
    actionMoviesRequesting,
    romanceMovies,
    romanceMoviesRequesting,
    horrorMovies,
    horrorMoviesRequesting,
  ) => ({
    actionMovies,
    actionMoviesRequesting,
    romanceMovies,
    romanceMoviesRequesting,
    horrorMovies,
    horrorMoviesRequesting,
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
