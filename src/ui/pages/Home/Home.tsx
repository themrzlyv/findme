import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Body from './partials/Body';
import Header from './partials/Header';

interface iProps {}

const Home: React.FC<iProps> = (): JSX.Element => {
  return (
    <Paper elevation={2}>
      <Box component="div" display="flex" flexDirection="column" justifyContent="center">
        <Header />
        <Body />
      </Box>
    </Paper>
  );
};

export default Home;
