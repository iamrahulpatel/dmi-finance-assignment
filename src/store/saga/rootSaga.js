import { all, fork } from 'redux-saga/effects'
import { watchGlobalSaga } from './saga';

// Redux Saga: Root Saga
export function* rootSaga() {
    yield all([
        fork(watchGlobalSaga),
    ]);
};