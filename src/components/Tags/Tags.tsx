import { Chip, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';

import TagSharpIcon from '@mui/icons-material/TagSharp';
import { maxTags, eachTagMaxSize } from './common/constants';

interface iProps {
  label?: string;
  handleAddTag: (arr: string[]) => void;
  variant?: 'standard' | 'outlined' | 'filled';
  sx?: any;
}

const Tags: React.FC<iProps> = ({ label, handleAddTag, variant, sx }): JSX.Element => {
  const [tags, setTags] = React.useState<string[]>([]);
  const [inputValue, setInputValue] = React.useState<string>('');

  const handleDelete = (value: string) => {
    const newtags = tags.filter((val) => val !== value);
    setInputValue('');
    setTags(newtags);
  };

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (tags.length >= maxTags) return;
    if (inputValue === '') return;
    if (inputValue.length > eachTagMaxSize) return;
    if (e.keyCode === 32) {
      setTags((prev) => [...prev, inputValue]);
      return setInputValue('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.value.length > eachTagMaxSize) return;
    if (tags.length >= maxTags) {
      return setInputValue('');
    }
    setInputValue(e.target.value);
  };

  useEffect(() => {
    handleAddTag(tags);
  }, [tags]);

  return (
    <>
      <TextField
        variant={variant}
        sx={sx}
        value={inputValue}
        onKeyDown={handlePressEnter}
        onChange={handleChange}
        label={label}
        InputProps={{
          startAdornment: tags?.length > 0 && (
            <Box sx={{ display: 'flex' }}>
              {tags.map((data, index) => {
                return (
                  <Stack direction="row" gap={1} key={index} marginBottom={1} marginRight={1}>
                    <Chip
                      label={data}
                      onDelete={() => handleDelete(data)}
                      icon={<TagSharpIcon fontSize="small" />}
                    />
                  </Stack>
                );
              })}
            </Box>
          ),
        }}
      />
    </>
  );
};

export default Tags;
