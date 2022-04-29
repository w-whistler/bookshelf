import { all } from 'redux-saga/effects';

import { fetchBooksWacher } from './bookSaga';

export default function* rootSaga() {
  yield all([fetchBooksWacher()]);
}
