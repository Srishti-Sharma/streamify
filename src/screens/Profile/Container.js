import {connect} from 'react-redux';
import Component from './Component';
// import {testAction} from './actions';
import {createSelector} from 'reselect';
// import {selectTest} from './selectors';

// const mapStateToProps = createSelector(selectTest, test => ({
//   test,
// }));

// const mapDispatchToProps = dispatch => ({
//   testAction: payload => dispatch(testAction(payload)),
// });

export default connect(null, null)(Component);
