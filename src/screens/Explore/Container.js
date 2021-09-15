import {connect} from 'react-redux';
import Component from './Component';
import {createSelector} from 'reselect';
import //
'./actions';
import //
'./selectors';
import {setGenre} from '../MovieList/actions';
import {selectGenreList} from '../Home/selectors';

const mapStateToProps = createSelector(selectGenreList, genreList => ({
  genreList,
}));

const mapDispatchToProps = dispatch => ({
  setGenre: payload => dispatch(setGenre(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
