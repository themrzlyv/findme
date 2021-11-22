import React from 'react';
import { Grid } from '@mui/material';

interface iProps {
}

const Layout:React.FC<iProps> = ({ children }): JSX.Element => {
    return (
        <Grid  container>
          <Grid item xs={12}>Navbar</Grid>
          <Grid item xs={10}>
            {children}
          </Grid>
          <Grid item xs={2}>Sidebar</Grid>
        </Grid>
    );
}

export default Layout;