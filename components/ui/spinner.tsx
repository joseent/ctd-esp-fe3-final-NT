
import Grid from '@mui/material/Grid';

import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Spinner = () => {
  return (

    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
      <CircularProgress />
    </Box>
  )
}
