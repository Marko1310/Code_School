import CircularProgress from '@mui/material/CircularProgress';

function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <CircularProgress color="success" size={80} />
    </div>
  );
}

export default Loading;
