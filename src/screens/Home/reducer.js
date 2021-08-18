import {handleActions} from 'redux-actions';
import {getActionOptions} from '../../utils/reduxactions';
import {actionTypes, ACTION_PREFIX} from './constants';

/**
 | ---------------------------------------------------------------------
 | REDUCER  
 | ---------------------------------------------------------------------
 */
const initialState = {
  actionMovies: [],
  actionMoviesRequesting: false,
  actionMoviesError: {},
  romanceMovies: [],
  romanceMoviesRequesting: false,
  romanceMoviesError: {},
};

// reducer

const reducer = handleActions(
  {
    [actionTypes.FETCH_ACTION_MOVIES_REQUEST]: (state, {payload}) => ({
      ...state,
      actionMoviesRequesting: true,
    }),
    [actionTypes.FETCH_ACTION_MOVIES_SUCCESS]: (state, {payload}) => ({
      ...state,
      actionMoviesRequesting: false,
      actionMovies: [...payload],
    }),
    [actionTypes.FETCH_ACTION_MOVIES_FAILURE]: (state, {payload}) => ({
      ...state,
      actionMoviesRequesting: false,
      actionMoviesError: payload,
    }),
    [actionTypes.FETCH_ROMANCE_MOVIES_REQUEST]: (state, {payload}) => ({
      ...state,
      romanceMoviesRequesting: true,
    }),
    [actionTypes.FETCH_ROMANCE_MOVIES_SUCCESS]: (state, {payload}) => ({
      ...state,
      romanceMoviesRequesting: false,
      romanceMovies: [...payload],
    }),
    [actionTypes.FETCH_ROMANCE_MOVIES_FAILURE]: (state, {payload}) => ({
      ...state,
      romanceMoviesRequesting: false,
      romanceMoviesError: payload,
    }),
  },
  initialState,
  getActionOptions(ACTION_PREFIX),
);

export default reducer;
