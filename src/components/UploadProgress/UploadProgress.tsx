import { IconButton, LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import CloseIcon from '@mui/icons-material/Close';

interface iProps {
  progress: number;
  fileName: string;
  handleRemoveFile: (name: string) => void;
}

const UploadProgress: React.FC<iProps> = ({
  progress,
  fileName,
  handleRemoveFile,
}): JSX.Element => {
  return (
    <Box
      component="div"
      display="flex"
      flexDirection="column"
      sx={{ minWidth: '10em', marginX: '2em', marginBottom: '0.6em' }}
    >
      <Box component="div" display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="caption">{fileName}</Typography>
        <IconButton size="small" onClick={() => handleRemoveFile(fileName)}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
};

export default React.memo(UploadProgress);
