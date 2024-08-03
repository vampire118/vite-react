import { all, fork } from 'redux-saga/effects';
import { watchIncrementAsync } from './counter/saga';

export default function* rootSaga() {
  yield all([
    fork(watchIncrementAsync),
    // Add more sagas here if needed
  ]);
}
