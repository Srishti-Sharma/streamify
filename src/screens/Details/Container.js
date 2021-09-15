import {connect} from 'react-redux';
import Component from './Component';
import {createSelector} from 'reselect';
import {
  selectGenreList,
  selectMovieTrailerUrlRequesting,
  selectMovieTrailerUrl,
} from '../Home/selectors';
import {fetchMovieTrailerUrlRequest} from '../Home/actions';

const mapStateToProps = createSelector(
  selectGenreList,
  selectMovieTrailerUrlRequesting,
  selectMovieTrailerUrl,
  (genreList, movieTrailerUrlRequesting, movieTrailerUrl) => ({
    genreList,
    movieTrailerUrlRequesting,
    movieTrailerUrl,
  }),
);

const mapDispatchToProps = dispatch => ({
  fetchMovieTrailerUrlRequest: payload =>
    dispatch(fetchMovieTrailerUrlRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
