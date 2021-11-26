import React from 'react';
import { AppBar, Grid, Toolbar, Typography } from '@mui/material';

interface iProps {};

const Layout: React.FC<iProps> = ({ children }): JSX.Element => {
  return (
    <Grid container maxWidth="lg" mx="auto" spacing={1}>
      <Grid item xs={12}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="body2">FindMe</Typography>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item xs={10}>
        {children}
      </Grid>
      <Grid item xs={2}>
        Sidebar
      </Grid>
    </Grid>
  );
};

export default Layout;
