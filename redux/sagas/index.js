import {takeLatest, all, put} from 'redux-saga/effects'
import {watchJoin} from './user.saga'

export function* rootSaga(){
    yield all([fork(watchJoin)])
}