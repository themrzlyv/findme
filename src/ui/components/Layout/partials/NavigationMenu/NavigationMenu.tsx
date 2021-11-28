import { AppBar, Toolbar, Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface iProps {}

const NavigationMenu: React.FC<iProps> = (): JSX.Element => {
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Box
            component="div"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Link
              color="inherit"
              underline="none"
              fontFamily="sans-serif"
              fontWeight="bold"
              fontSize="h6"
              letterSpacing="0.5px"
              component={NavLink}
              to="/findme"
            >
              FindMe
            </Link>
            <Link
              color="inherit"
              underline="none"
              fontSize="1em"
              fontFamily="sans-serif"
              letterSpacing="0.2px"
              component={NavLink}
              to="/findme/post/create"
            >
              Add post
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavigationMenu;
