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
  horrorMovies: [],
  horrorMoviesRequesting: false,
  horrorMoviesError: {},
  trendingMovies: [],
  trendingMoviesRequesting: false,
  trendingMoviesError: {},
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
      actionMovies: [...payload.sort(() => Math.random() - 0.5)],
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
      romanceMovies: [...payload.sort(() => Math.random() - 0.5)],
    }),
    [actionTypes.FETCH_ROMANCE_MOVIES_FAILURE]: (state, {payload}) => ({
      ...state,
      romanceMoviesRequesting: false,
      romanceMoviesError: payload,
    }),
    [actionTypes.FETCH_HORROR_MOVIES_REQUEST]: (state, {payload}) => ({
      ...state,
      horrorMoviesRequesting: true,
    }),
    [actionTypes.FETCH_HORROR_MOVIES_SUCCESS]: (state, {payload}) => ({
      ...state,
      horrorMoviesRequesting: false,
      horrorMovies: [...payload.sort(() => Math.random() - 0.5)],
    }),
    [actionTypes.FETCH_HORROR_MOVIES_FAILURE]: (state, {payload}) => ({
      ...state,
      horrorMoviesRequesting: false,
      horrorMoviesError: payload,
    }),
    [actionTypes.FETCH_TRENDING_MOVIES_REQUEST]: (state, {payload}) => ({
      ...state,
      trendingMoviesRequesting: true,
    }),
    [actionTypes.FETCH_TRENDING_MOVIES_SUCCESS]: (state, {payload}) => ({
      ...state,
      trendingMoviesRequesting: false,
      trendingMovies: [...payload.sort(() => Math.random() - 0.5)],
    }),
    [actionTypes.FETCH_TRENDING_MOVIES_FAILURE]: (state, {payload}) => ({
      ...state,
      trendingMoviesRequesting: false,
      trendingMoviesError: payload,
    }),
  },
  initialState,
  getActionOptions(ACTION_PREFIX),
);

export default reducer;
