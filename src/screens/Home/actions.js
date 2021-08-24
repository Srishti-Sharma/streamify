import {createActions} from 'redux-actions';

// constants
import {ACTION_PREFIX, actionTypes} from './constants';
// utils
import {getActionOptions} from '../../utils/reduxactions';

/**
 | --------------------------------------------------------------------
 | ACTION CREATORS
 | --------------------------------------------------------------------
 | 
 |
 */

export const {
  fetchActionMoviesRequest,
  fetchActionMoviesSuccess,
  fetchActionMoviesFailure,
  fetchRomanceMoviesRequest,
  fetchRomanceMoviesSuccess,
  fetchRomanceMoviesFailure,
  fetchHorrorMoviesRequest,
  fetchHorrorMoviesSuccess,
  fetchHorrorMoviesFailure,
  fetchTrendingMoviesRequest,
  fetchTrendingMoviesSuccess,
  fetchTrendingMoviesFailure,
  fetchGenreListRequest,
  fetchGenreListSuccess,
  fetchGenreListFailure,
} = createActions(
  actionTypes.FETCH_ACTION_MOVIES_REQUEST,
  actionTypes.FETCH_ACTION_MOVIES_SUCCESS,
  actionTypes.FETCH_ACTION_MOVIES_FAILURE,
  actionTypes.FETCH_ROMANCE_MOVIES_REQUEST,
  actionTypes.FETCH_ROMANCE_MOVIES_SUCCESS,
  actionTypes.FETCH_ROMANCE_MOVIES_FAILURE,
  actionTypes.FETCH_HORROR_MOVIES_REQUEST,
  actionTypes.FETCH_HORROR_MOVIES_SUCCESS,
  actionTypes.FETCH_HORROR_MOVIES_FAILURE,
  actionTypes.FETCH_TRENDING_MOVIES_REQUEST,
  actionTypes.FETCH_TRENDING_MOVIES_SUCCESS,
  actionTypes.FETCH_TRENDING_MOVIES_FAILURE,
  actionTypes.FETCH_GENRE_LIST_REQUEST,
  actionTypes.FETCH_GENRE_LIST_SUCCESS,
  actionTypes.FETCH_GENRE_LIST_FAILURE,

  getActionOptions(ACTION_PREFIX),
);
