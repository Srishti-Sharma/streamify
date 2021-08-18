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
} = createActions(
  actionTypes.FETCH_ACTION_MOVIES_REQUEST,
  actionTypes.FETCH_ACTION_MOVIES_SUCCESS,
  actionTypes.FETCH_ACTION_MOVIES_FAILURE,
  actionTypes.FETCH_ROMANCE_MOVIES_REQUEST,
  actionTypes.FETCH_ROMANCE_MOVIES_SUCCESS,
  actionTypes.FETCH_ROMANCE_MOVIES_FAILURE,
  getActionOptions(ACTION_PREFIX),
);
