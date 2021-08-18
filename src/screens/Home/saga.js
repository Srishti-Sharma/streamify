import {takeLatest, fork, select, call, put} from 'redux-saga/effects';
//actions

import {fetchActionMoviesRequest, fetchRomanceMoviesRequest} from './actions';
//axios
import axios from '../../../api/axios';
import {actionTypes, ACTION_PREFIX} from './constants';
import {createActionString} from '../../utils/reduxactions';
//selectors

const getActionMovies = ({payload}) => {
  return axios
    .get(payload)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
};
const getRomanceMovies = ({payload}) => {
  return axios
    .get(payload)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
};
function* fetchActionMovieData(action) {
  const response = yield call(getActionMovies, {
    payload: action.payload,
  });
  if (response && response.data && response.data.results) {
    yield put({
      type: createActionString(
        ACTION_PREFIX,
        actionTypes.FETCH_ACTION_MOVIES_SUCCESS,
      ),
      payload: response.data.results,
    });
  } else {
    yield put({
      type: createActionString(
        ACTION_PREFIX,
        actionTypes.FETCH_ACTION_MOVIES_FAILURE,
      ),
      payload: {error: 'Something Went Wrong'},
    });
  }
}
function* fetchRomanceMovieData(action) {
  const response = yield call(getRomanceMovies, {
    payload: action.payload,
  });
  if (response && response.data && response.data.results) {
    yield put({
      type: createActionString(
        ACTION_PREFIX,
        actionTypes.FETCH_ROMANCE_MOVIES_SUCCESS,
      ),
      payload: response.data.results,
    });
  } else {
    yield put({
      type: createActionString(
        ACTION_PREFIX,
        actionTypes.FETCH_ROMANCE_MOVIES_FAILURE,
      ),
      payload: {error: 'Something Went Wrong'},
    });
  }
}

function* testSaga() {
  yield takeLatest(fetchActionMoviesRequest, fetchActionMovieData);
  yield takeLatest(fetchRomanceMoviesRequest, fetchRomanceMovieData);
}

export default testSaga;
