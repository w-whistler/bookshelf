import { IBookSearchParams } from 'src/models/book';

import { FETCH_BOOKS, REMOVE_BOOK, REORDER_BOOK } from './bookAction.types';

export const fetchBooks = (params: IBookSearchParams) => ({
  type: FETCH_BOOKS,
  params,
});

export const reorderBooks = (sourceIndex: number, targetIndex: number) => ({
  type: REORDER_BOOK,
  payload: {
    sourceIndex,
    targetIndex,
  },
});

export const deleteBook = (bookId: string) => ({
  type: REMOVE_BOOK,
  payload: {
    bookId,
  },
});
