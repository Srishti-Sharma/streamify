import {connect} from 'react-redux';
import Component from './Component';
import {createSelector} from 'reselect';
import //
'./actions';
import //
'./selectors';

const mapStateToProps = createSelector(
  //
  () =>
    //
    ({
      //
    }),
);

const mapDispatchToProps = dispatch => ({
  //   fetchActionMoviesRequest: payload =>
  //     dispatch(fetchActionMoviesRequest(payload)),
});

export default connect(null, null)(Component);
