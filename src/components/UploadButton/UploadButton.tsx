import { Button, CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import UploadProgress from '../UploadProgress';

interface iProps {
  id?: string;
  variant?: 'text' | 'outlined' | 'contained';
  acceptOnlyFormats?: string[];
  multiple?: boolean;
  progress: number;
  fileName: string;
  loading?: boolean;
  handleRemoveFile: (name: string) => void;
  handleFileChange: React.ChangeEventHandler<HTMLInputElement>;
  wrapperStyle?: React.CSSProperties | undefined;
}

const UploadButton: React.FC<iProps> = ({
  id,
  wrapperStyle,
  handleFileChange,
  variant,
  multiple,
  progress,
  fileName,
  loading,
  acceptOnlyFormats,
  handleRemoveFile,
}): JSX.Element => {
  return (
    <Box component="div" display="flex" alignItems="center" style={wrapperStyle}>
      <label htmlFor={id}>
        <input
          style={{ display: 'none' }}
          accept={acceptOnlyFormats?.join(', ')}
          id={id}
          multiple={multiple}
          type="file"
          onChange={handleFileChange}
        />
        <Button variant={variant} component="span" disabled={loading || Boolean(fileName)}>
          {loading ? <CircularProgress size={20} /> : 'Upload'}
        </Button>
      </label>
      {progress || fileName ? (
        <UploadProgress
          progress={progress}
          handleRemoveFile={handleRemoveFile}
          fileName={fileName}
        />
      ) : null}
    </Box>
  );
};

export default React.memo(UploadButton);
