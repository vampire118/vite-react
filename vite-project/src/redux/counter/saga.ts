import { takeLatest, put, delay, type Effect } from 'redux-saga/effects';
import { increment } from './slice';

// Worker Saga: IncrementAsync
function* incrementAsync() {
  yield delay(1000); // Simulate async delay
  yield put(increment());
}

export function* watchIncrementAsync(){
  console.log('object');
  yield takeLatest(increment.type, incrementAsync);
  // yield delay(1000);
  // yield put(increment());
}
