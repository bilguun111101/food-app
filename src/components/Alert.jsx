import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Error = (props) => {
    const propsy = props.text;
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">{propsy}</Alert>
    </Stack>
  );
}

export default Error;
