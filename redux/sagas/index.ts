import { all } from 'redux-saga/effects'
import { articleJoin } from './articleSaga.ts'
import { watchJoin, watchLogin } from "./userSaga.ts";

export default function* rootSaga() {
    yield all([watchJoin(), articleJoin(), watchLogin()])
  }