import {all} from 'redux-saga/effects';
import {saga as testSaga} from '../screens/testScreen';

export default function* rootSaga() {
  yield all([
    //combine all sagas here
    testSaga(),
  ]);
}
