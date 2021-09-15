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
  fetchMovieByGenreIdRequest,
  fetchMovieByGenreIdSuccess,
  fetchMovieByGenreIdFailure,
  fetchMovieTrailerUrlRequest,
  fetchMovieTrailerUrlSuccess,
  fetchMovieTrailerUrlFailure,
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
  actionTypes.FETCH_MOVIE_BY_GENRE_ID_REQUEST,
  actionTypes.FETCH_MOVIE_BY_GENRE_ID_SUCCESS,
  actionTypes.FETCH_MOVIE_BY_GENRE_ID_FAILURE,
  actionTypes.FETCH_MOVIE_TRAILER_URL_REQUEST,
  actionTypes.FETCH_MOVIE_TRAILER_URL_SUCCESS,
  actionTypes.FETCH_MOVIE_TRAILER_URL_FAILURE,
  getActionOptions(ACTION_PREFIX),
);
