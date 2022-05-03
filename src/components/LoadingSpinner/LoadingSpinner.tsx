import { CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    top: 0,
  },
});

export const LoadingSpinner = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CircularProgress />
    </div>
  );
};
