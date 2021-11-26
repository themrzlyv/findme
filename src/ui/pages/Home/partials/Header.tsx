import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

interface iProps {
}

const Header:React.FC<iProps> = (): JSX.Element => {
    return (
        <Box component="div" display="flex" justifyContent="center" marginY={3}>
          <Typography variant="subtitle1" fontWeight="bold">
              Search, find and share development skills
          </Typography>
        </Box>
    );
}

export default Header;