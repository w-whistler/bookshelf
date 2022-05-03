import DeleteIcon from '@mui/icons-material/Delete';
import { Card, CardContent, IconButton, Link, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import moment from 'moment';
import { useCallback } from 'react';
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { IBook } from 'src/models/book';

type BookItemProps = {
  book: IBook;
  draggableProvided: DraggableProvided;
  draggableSnapshot: DraggableStateSnapshot;
  onDeleteBook: (bookId: string) => void;
};

const useStyles = makeStyles({
  cardContent: {
    '&.MuiCardContent-root:last-child': {
      padding: 0,
    },
  },
  thumbnail: {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  },
});

const BookItem = ({ book, draggableProvided, draggableSnapshot, onDeleteBook }: BookItemProps) => {
  const classes = useStyles();

  const getItemStyle = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (isDragging: boolean, draggableStyle: any) => ({
      marginBottom: 8,
      userSelect: 'none',
      ...draggableStyle,
    }),
    []
  );

  return (
    <Card
      ref={draggableProvided.innerRef}
      {...draggableProvided.draggableProps}
      {...draggableProvided.dragHandleProps}
      style={getItemStyle(draggableSnapshot.isDragging, draggableProvided.draggableProps.style)}
    >
      <CardContent className={classes.cardContent}>
        <Box display='flex' alignItems='flex-start' gap={2}>
          <img src={book.thumbnail} width={100} className={classes.thumbnail} />
          <Box py={1} flex={1}>
            <Link href={book.previewLink} variant='h5' fontWeight='bold' target='_blank'>
              {book.title}
            </Link>
            {book.subtitle && <Typography variant='h6'>{book.subtitle}</Typography>}
            <Typography variant='h6'>
              <b>Author:</b> {book.authors?.join(', ')}
            </Typography>
            <Typography variant='h6'>
              <b>Publishder:</b> {book.publisher}
            </Typography>
            <Typography variant='h6'>
              <b>Published at:</b> {moment(book.publishedDate).format('MMMM DD, yyyy')}
            </Typography>
          </Box>
          <IconButton onClick={() => onDeleteBook(book.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BookItem;
