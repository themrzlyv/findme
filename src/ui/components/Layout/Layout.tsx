import React from 'react';
import { Grid } from '@mui/material';
import NavigationMenu from './partials/NavigationMenu';

interface iProps {}

const Layout: React.FC<iProps> = ({ children }): JSX.Element => {
  return (
    <Grid container maxWidth="lg" mx="auto">
      <Grid item xs={12}>
        <NavigationMenu />
      </Grid>
      <Grid item xs={12} marginTop={1}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Layout;
