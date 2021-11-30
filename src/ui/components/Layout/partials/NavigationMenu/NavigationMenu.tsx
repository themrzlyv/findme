import {
  AppBar,
  Toolbar,
  Link,
  Grid,
  Avatar,
  Button,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';

interface iProps {}

const MobileMenu: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} sx={{ width: '240px' }}>
        <List sx={{ width: '240px' }}>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link
                color="inherit"
                underline="none"
                fontSize="1em"
                fontFamily="sans-serif"
                letterSpacing="0.2px"
                component={NavLink}
                to="/findme/post/create"
              >
                <Button variant="contained">Create post</Button>
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link
                color="inherit"
                underline="none"
                fontSize="1em"
                fontFamily="sans-serif"
                letterSpacing="0.2px"
                component={NavLink}
                to="/findme/contact"
              >
                Contact
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link
                color="inherit"
                underline="none"
                fontSize="1em"
                fontFamily="sans-serif"
                letterSpacing="0.2px"
                component={NavLink}
                to="/findme/faq"
              >
                Faq
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

const NavigationMenu: React.FC<iProps> = (): JSX.Element => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar elevation={1} color="default">
        <Grid container maxWidth="lg" marginX="auto">
          <Grid item xs={12}>
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
                  <Avatar
                    sx={{
                      bgcolor: 'black',
                      borderRadius: '4px',
                      width: 'max-content',
                      paddingX: '0.8em',
                    }}
                  >
                    FindMe
                  </Avatar>
                </Link>

                {isMobile ? (
                  <MobileMenu />
                ) : (
                  <>
                    <Box
                      component="div"
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{ width: '12em' }}
                    >
                      <Link
                        color="inherit"
                        underline="none"
                        fontSize="1em"
                        fontFamily="sans-serif"
                        letterSpacing="0.2px"
                        component={NavLink}
                        to="/findme/post/create"
                      >
                        <Button variant="contained">Create post</Button>
                      </Link>

                      <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                          </IconButton>
                        </Tooltip>
                        <Menu
                          sx={{ mt: '45px' }}
                          id="menu-appbar"
                          anchorEl={anchorElUser}
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          open={Boolean(anchorElUser)}
                          onClose={handleCloseUserMenu}
                        >
                          {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseNavMenu}>
                              <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                          ))}
                        </Menu>
                      </Box>
                    </Box>
                  </>
                )}
              </Box>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};

export default NavigationMenu;
