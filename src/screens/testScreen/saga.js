import { takeLatest, fork, select, call, put } from "redux-saga/effects";
//actions

import { testAction } from "./actions";
//selectors

function* testing(action) {
  console.log("**** THIS IS A TEST SAGA****");
}

function* testSaga() {
  yield takeLatest(testAction, testing);
}

export default testSaga;
