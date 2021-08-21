import {all} from 'redux-saga/effects';
import {saga as testSaga} from '../screens/testScreen';
import {saga as homeSaga} from '../screens/Home';

export default function* rootSaga() {
  yield all([
    //combine all sagas here
    testSaga(),
    homeSaga(),
  ]);
}
