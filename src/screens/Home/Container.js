import {connect} from 'react-redux';
import Component from './Component';
import {createSelector} from 'reselect';
import {fetchActionMoviesRequest, fetchRomanceMoviesRequest} from './actions';
import {
  selectActionMovies,
  selectActionMoviesRequesting,
  selectRomanceMovies,
  selectRomanceMoviesRequesting,
} from './selectors';

const mapStateToProps = createSelector(
  selectActionMovies,
  selectActionMoviesRequesting,
  selectRomanceMovies,
  selectRomanceMoviesRequesting,
  (
    actionMovies,
    actionMoviesRequesting,
    romanceMovies,
    romanceMoviesRequesting,
  ) => ({
    actionMovies,
    actionMoviesRequesting,
    romanceMovies,
    romanceMoviesRequesting,
  }),
);

const mapDispatchToProps = dispatch => ({
  fetchActionMoviesRequest: payload =>
    dispatch(fetchActionMoviesRequest(payload)),
  fetchRomanceMoviesRequest: payload =>
    dispatch(fetchRomanceMoviesRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
