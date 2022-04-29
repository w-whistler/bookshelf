export const BOOK_ACTION_TYPES = {
  FETCH_BOOKS: 'FETCH_BOOKS',
  FETCH_BOOKS_SUCCEED: 'FETCH_BOOKS_SUCCEED',
};

export const fetchBooks = () => ({
  type: BOOK_ACTION_TYPES.FETCH_BOOKS,
});
