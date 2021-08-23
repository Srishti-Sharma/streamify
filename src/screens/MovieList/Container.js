import {connect} from 'react-redux';
import Component from './Component';
import {createSelector} from 'reselect';

import {selectMovieListGenre} from './selectors';
import {fetchActionMoviesRequest} from '../Home/actions';
import {
  selectActionMoviesRequesting,
  selectActionMovies,
} from '../Home/selectors';

const mapStateToProps = createSelector(
  selectMovieListGenre,
  selectActionMoviesRequesting,
  selectActionMovies,
  (movieListGenre, actionMoviesRequesting, actionMovies) => ({
    movieListGenre,
    actionMoviesRequesting,
    actionMovies,
  }),
);

const mapDispatchToProps = dispatch => ({
  fetchActionMoviesRequest: payload =>
    dispatch(fetchActionMoviesRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
