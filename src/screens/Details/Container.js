import {connect} from 'react-redux';
import Component from './Component';
import {createSelector} from 'reselect';
import {selectGenreList} from '../Home/selectors';

const mapStateToProps = createSelector(selectGenreList, genreList => ({
  genreList,
}));

export default connect(mapStateToProps, null)(Component);
