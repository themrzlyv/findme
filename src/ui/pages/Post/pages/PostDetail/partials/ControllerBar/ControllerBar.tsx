import { Box } from '@mui/system';
import React from 'react';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

interface iProps {}

const ControllerBar: React.FC<iProps> = (): JSX.Element => {
  return (
    <>
      <Box component="aside" display="flex" justifyContent="center" height="100%" flex={1}>
        <Box
          component="div"
          position="fixed"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
          marginTop="7em"
          height="8em"
        >
          <FavoriteBorderIcon fontSize="medium" />
          <MoreHorizIcon fontSize="medium" />
        </Box>
      </Box>
    </>
  );
};

export default ControllerBar;
