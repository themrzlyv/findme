import { Button, Chip, Paper, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { toast } from 'react-toastify';

import { Cancel, Tag } from '@mui/icons-material';

import { createPost } from '../../../../../services/api/api.posts';
import { iCreatePost } from '../../common/@types';
import Tags from '../../../../../components/Tags';

const CreatePost: React.FC = (): JSX.Element => {
  const [form, setForm] = React.useState<iCreatePost>({
    title: '',
    tags: [],
    category: '',
    content: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    createPost(form)
      .then((data) => data && toast.success('Post saved successfully', { toastId: 'saveId' }))
      .catch((err) => toast.error(err.message, { toastId: 'errorId' }));
  };

  const handleAddTag = React.useCallback((arr) => setForm((prev) => ({ ...prev, tags: arr })), []);

  console.log(form);

  return (
    <Paper>
      <Box component="div" display="flex" flexDirection="column" py={3}>
        <Box component="div" display="flex" sx={{ width: '50%', marginX: 'auto' }}>
          <Typography variant="h5" fontWeight="bold">
            Create a new post
          </Typography>
        </Box>
        <TextField
          label="Title"
          type="text"
          name="title"
          variant="standard"
          onChange={handleChange}
          sx={{ marginBottom: '1rem', marginX: 'auto' }}
          required
        />
        <Tags
          label="Add tags"
          variant="standard"
          handleAddTag={handleAddTag}
          sx={{ marginBottom: '1rem', marginX: 'auto' }}
        />
        <TextField
          label="Category"
          type="text"
          name="category"
          variant="standard"
          onChange={handleChange}
          sx={{ marginBottom: '1rem', marginX: 'auto' }}
          required
        />
        <TextField
          label="Content"
          type="text"
          name="content"
          variant="standard"
          onChange={handleChange}
          sx={{ marginBottom: '1rem', marginX: 'auto' }}
          required
        />
        <Button onClick={handleSave}>Save</Button>
      </Box>
    </Paper>
  );
};

export default CreatePost;
