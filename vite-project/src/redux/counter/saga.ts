import { takeEvery, put, delay } from 'redux-saga/effects';
import { increment } from './slice';

// Worker Saga: IncrementAsync
function* incrementAsync() {
  yield delay(1000); // Simulate async delay
  yield put(increment());
}

// Watcher Saga: Watches for actions
export function* watchIncrementAsync() {
  yield takeEvery('counter/incrementAsync', incrementAsync);
}
