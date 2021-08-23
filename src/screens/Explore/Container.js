import {connect} from 'react-redux';
import Component from './Component';
import {createSelector} from 'reselect';
import //
'./actions';
import //
'./selectors';
import {setGenre} from '../MovieList/actions';
const mapStateToProps = createSelector(
  //
  () =>
    //
    ({
      //
    }),
);

const mapDispatchToProps = dispatch => ({
  setGenre: payload => dispatch(setGenre(payload)),
});

export default connect(null, mapDispatchToProps)(Component);
