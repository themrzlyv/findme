import { Avatar, Button, Paper, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

interface iProps {}

const useStyles = makeStyles((theme: Theme) => ({
  avatarWrapper: {
    '&::after': {
      width: '100%',
      height: '6%',
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: 'black',
    },
  },
}));

const UserAvatar: React.FC<iProps> = (): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <Box component="div" display="flex" flexDirection="column" height="100%" flex={3}>
        <Box display="flex" flexDirection="column" position="sticky" top={0}>
          <Paper elevation={2}>
            <Box component="div" display="flex" flexDirection="column">
              <Box
                component="div"
                display="flex"
                alignItems="flex-end"
                width="100%"
                marginBottom={1}
                padding={2}
                className={classes.avatarWrapper}
              >
                <Avatar alt="profile" src="" sx={{ zIndex: '1' }} />
                <Box component="div" display="flex" flexDirection="column" ml={1}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    John Doe
                  </Typography>
                </Box>
              </Box>
              <Box component="div" display="flex" justifyContent="center" marginBottom={2}>
                <Button variant="contained" color="primary" sx={{ width: '80%' }}>
                  Follow
                </Button>
              </Box>
              <Box
                component="div"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                paddingX={2}
              >
                <Typography variant="subtitle1" color="GrayText" marginBottom={2}>
                  Top Rated Freelancer || Blogger || Cross-Platform App Developer || Web Developer
                  || Open Source Contributor
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold" color="GrayText">
                  LOCATION
                </Typography>
                <Typography variant="subtitle1" color="GrayText" marginBottom={2}>
                  Kolkata, West Bengal, India
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold" color="GrayText">
                  EDUCATION
                </Typography>
                <Typography variant="subtitle1" color="GrayText" marginBottom={2}>
                  VIT, Chennai
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold" color="GrayText">
                  JOINED
                </Typography>
                <Typography variant="subtitle1" color="GrayText" marginBottom={2}>
                  Dec 4, 2020
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default UserAvatar;
