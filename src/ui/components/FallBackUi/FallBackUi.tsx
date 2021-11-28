import React from 'react';
import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

interface iProps {}

const FallBackUi: React.FC<iProps> = (): JSX.Element => {
  return (
    <Box component="div" display="flex" alignItems="center" justifyContent="center" height="100vh">
      <CircularProgress />
    </Box>
  );
};

export default FallBackUi;
