import { call, put, takeEvery } from 'redux-saga/effects';
import { IBookSearchParams } from 'src/models/book';
import { fetchBooks } from 'src/services/books';

import { FETCH_BOOKS, FETCH_BOOKS_FAILED, FETCH_BOOKS_SUCCEED } from '../actions/bookAction.types';

function* fetchBooksSaga({ params }: { type: string; params: IBookSearchParams }) {
  try {
    const {
      data: { items, totalItems },
    } = yield call(fetchBooks, params);

    yield put({
      type: FETCH_BOOKS_SUCCEED,
      payload: {
        books: items.map((item) => ({
          ...item.volumeInfo,
          id: item.id,
          thumbnail: item.volumeInfo.imageLinks.thumbnail,
        })),
        totalItems,
      },
    });
  } catch (error) {
    yield put({
      type: FETCH_BOOKS_FAILED,
      error,
    });
  }
}

function* fetchBooksWacher() {
  yield takeEvery(FETCH_BOOKS, fetchBooksSaga);
}

export { fetchBooksWacher };
