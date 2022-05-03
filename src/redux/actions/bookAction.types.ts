import { IBook } from 'src/models/book';

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_BOOKS_SUCCEED = 'FETCH_BOOKS_SUCCEED';
export const FETCH_BOOKS_FAILED = 'FETCH_BOOKS_FAILED';

export const REORDER_BOOK = 'REORDER_BOOK';

export const REMOVE_BOOK = 'REMOVE_BOOK';

export type BookActionType = {
  type: string;
  payload: {
    books?: IBook[];
    totalItems?: number;
    bookId?: string;
    sourceIndex?: number;
    targetIndex?: number;
  };
}
