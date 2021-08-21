import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
/**
 * Log Redux Actions Middleware function.
 */
const logActions = () => next => action => {
  const {type, payload} = action;
  console.log('[Redux Dispatch]', new Date().valueOf(), type, payload);
  return next(action);
};

const sagaMiddleware = createSagaMiddleware();

const configure = () => {
  // CREATE STORE
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logActions),
  );

  sagaMiddleware.run(rootSaga);

  return {store};
};

export default configure;
