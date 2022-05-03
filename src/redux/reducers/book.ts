import { IBookState } from 'src/models/book';
import { reorderBooks } from 'src/utils/books';

import { FETCH_BOOKS, FETCH_BOOKS_SUCCEED, BookActionType, REMOVE_BOOK, REORDER_BOOK } from '../actions/bookAction.types';

const initialState: IBookState = {
  loading: false,
  totalItems: 0,
  books: [],
};

export const bookReducer = (state: IBookState = initialState, action: BookActionType) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        loading: true,
      };

    case FETCH_BOOKS_SUCCEED:
      return {
        ...state,
        loading: false,
        books: action.payload.books,
        totalItems: action.payload.totalItems,
      };

    case REORDER_BOOK:
      return {
        ...state,
        books: reorderBooks(state.books, action.payload.sourceIndex, action.payload.targetIndex),
      };
    
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload?.bookId),
      };

    default:
      return state;
  }
};
