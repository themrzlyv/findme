import React from 'react';
import { Grid, Theme } from '@mui/material';
import NavigationMenu from './partials/NavigationMenu';
import { makeStyles } from '@mui/styles';

interface iProps {}

const useStyles = makeStyles((theme: Theme) => ({
  section: {
    height: `75px`,
  },
}));

const Layout: React.FC<iProps> = ({ children }): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <NavigationMenu />
      <div className={classes.section} />
      <Grid container maxWidth="lg" mx="auto">
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
