import { all } from 'redux-saga/effects';
import { watchIncrementAsync } from './counter/saga';

export default function* rootSaga() {
  yield all([
    watchIncrementAsync(),
    // Add more sagas here if needed
  ]);
}
