import { IBookState } from 'src/models/book';

import { BOOK_ACTION_TYPES } from '../actions/bookAction';

const initialState: IBookState = {
  loading: false,
  numFound: 0,
  start: 0,
  books: [],
};

export const bookReducer = (state: IBookState = initialState, action: any) => {
  switch (action.type) {
    case BOOK_ACTION_TYPES.FETCH_BOOKS:
      return {
        ...state,
        loading: true,
      };

    case BOOK_ACTION_TYPES.FETCH_BOOKS_SUCCEED:
      return {
        ...state,
        loading: false,
        books: action.books,
        numFound: action.numFound,
        start: action.start,
      };
  }
};
