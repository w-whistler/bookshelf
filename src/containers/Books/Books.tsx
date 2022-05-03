import { Box, Button, Container, TextField } from '@mui/material';
import { useCallback, useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoadingSpinner } from 'src/components';
import { IRootState } from 'src/models/root';
import { fetchBooks, reorderBooks, deleteBook } from 'src/redux/actions/bookAction';

import BookItem from './components/BookItem/BookItem';

type BooksProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const Books = ({
  loadingBooks,
  books,
  fetchBooks,
  reorderBooks,
  deleteBook,
}: BooksProps) => {
  const [keyword, setKeyword] = useState('');

  const onSearch = useCallback(() => {
    fetchBooks({ q: keyword, maxResults: 20 });
  }, [fetchBooks, keyword])

  const onDragEnd = useCallback((result: DropResult) => {
    if (!result.destination) return;

    reorderBooks(result.source.index, result.destination.index);
  }, [reorderBooks]);


  const onDeleteBook = useCallback((bookId: string) => {
    deleteBook(bookId);
  }, [deleteBook]);

  return (
    <Container maxWidth='md'>
      <Box my={2} display='flex' alignItems='center'>
        <TextField
          onChange={e => setKeyword(e.target.value)}
          value={keyword}
          variant='outlined'
          placeholder='Search keyword'
          fullWidth
        />
        <Button variant='contained' sx={{ marginLeft: 1 }} onClick={onSearch}>Search</Button>
      </Box>
      {loadingBooks ? (
        <LoadingSpinner />
      ) : (
        <Box mt={2}>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {books.map((book, index) => (
                    <Draggable key={book.id} draggableId={book.id} index={index}>
                      {(provided, snapshot) => (
                        <BookItem
                          book={book}
                          onDeleteBook={onDeleteBook}
                          draggableProvided={provided}
                          draggableSnapshot={snapshot}
                        />
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Box>
      )}
    </Container>
  );
};

const mapStateToProps = (state: IRootState) => ({
  loadingBooks: state.book.loading,
  books: state.book.books,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      fetchBooks,
      reorderBooks,
      deleteBook,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);
