import {handleActions} from 'redux-actions';
import {getActionOptions} from '../../utils/reduxactions';
import {actionTypes, ACTION_PREFIX} from './constants';

/**
 | ---------------------------------------------------------------------
 | REDUCER  
 | ---------------------------------------------------------------------
 */
const initialState = {
  count: 0,
};

// reducer

const reducer = handleActions(
  {
    [actionTypes.TEST_ACTION]: (state, {payload}) => ({
      ...state,
      count: state.count + payload,
    }),
  },
  initialState,
  getActionOptions(ACTION_PREFIX),
);

export default reducer;
