import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchBooks } from 'src/services/books';

import { BOOK_ACTION_TYPES } from '../actions/bookAction';

function* fetchBooksSaga() {
  try {
    const {
      data: { numFound, start, docs, numFoundExact },
    } = yield call(fetchBooks);

    yield put({
      type: BOOK_ACTION_TYPES.FETCH_BOOKS_SUCCEED,
      payload: {
        numFound,
        start,
        docs,
        numFoundExact,
      },
    });
  } catch (error) {
    console.error('> error: ', error);
  }
}

function* fetchBooksWacher() {
  yield takeEvery(BOOK_ACTION_TYPES.FETCH_BOOKS, fetchBooksSaga);
}

export { fetchBooksWacher };
