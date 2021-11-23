import { Chip, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';

interface iProps {
  label?: string;
  handleAddTag: (arr: string[]) => void;
  variant?: 'standard' | 'outlined' | 'filled';
  sx?: any;
}

const Tags: React.FC<iProps> = ({ label, handleAddTag, variant, sx }): JSX.Element => {
  const [tags, setTags] = React.useState<string[]>([]);

  const handleDelete = (value: string) => {
    const newtags = tags.filter((val) => val !== value);
    setTags(newtags);
  };

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (tags.length >= 5) return;
    if ((e.target as HTMLInputElement).value === '') return;
    if ((e.target as HTMLInputElement).value?.length >= 15) return;
    if (e.key === 'Enter') {
      setTags((prev) => [...prev, (e.target as HTMLInputElement).value]);
      return ((e.target as HTMLInputElement).value = '');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (tags.length === 0) {
      return (e.target.value = ' ');
    }

    if (tags.length >= 5) {
      return (e.target.value = '');
    }
  };

  useEffect(() => {
    handleAddTag(tags);
  }, [tags]);

  return (
    <>
      <TextField
        variant={variant}
        sx={sx}
        onKeyDown={handlePressEnter}
        onChange={handleChange}
        label={label}
        InputProps={{
          startAdornment: tags?.length > 0 && (
            <Box sx={{ margin: '0 0.2rem 0 0', display: 'flex' }}>
              {tags.map((data, index) => {
                return (
                  <Stack direction="row" gap={1} key={index} marginBottom={1} marginRight={1}>
                    <Chip label={data} onDelete={() => handleDelete(data)} />
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
