import { Button, Paper, TextField, Typography, Box } from '@mui/material';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

import { createPost } from '../../../../../services/api/api.posts';
import { iCreatePost } from '../../common/@types';
import Tags from '../../../../../components/Tags';
import CustomSelect from '../../../../../components/CustomSelect/CustomSelect';
import UploadButton from '../../../../../components/UploadButton';
import useFileUpload from '../../../../../services/hooks/useFileUpload';
import success from '../../../../../services/QueryId/success';
import error from '../../../../../services/QueryId/error';
import { categoryList } from '../../common/data/constants';

const CreatePost: React.FC = (): JSX.Element => {
  const [form, setForm] = React.useState<iCreatePost>({
    title: '',
    tags: [],
    category: '',
    content: '',
    image: '',
  });

  const { onFileChange, fileName, fileUrl, progress, loading, removeFile } = useFileUpload();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddTag = React.useCallback((arr) => setForm((prev) => ({ ...prev, tags: arr })), []);

  const handleSave = () => {
    if(!form.title || !form.content || !form.category || !form.tags.length || !form.image) {
      return toast.error('Please fill all the fields', { toastId: error.CREATE_POST_ERROR });
    }
    createPost(form)
      .then((data) => data && toast.success('Post saved successfully', { toastId: success.CREATE_POST_SUCCESS }))
      .catch((err) => toast.error(err.message, { toastId: error.CREATE_POST_ERROR }));
  };

  useEffect(() => {
    setForm((prev) => ({ ...prev, image: fileUrl }));
  }, [fileUrl]);

  return (
    <Paper>
      <Box component="div" display="flex" flexDirection="column" py={3}>
        <Box component="div" display="flex" marginY={5} sx={{ width: '50%', marginX: 'auto' }}>
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
          sx={{ marginBottom: '1em', marginX: 'auto' }}
          required
        />
        <Tags
          label="Add tags"
          variant="standard"
          handleAddTag={handleAddTag}
          sx={{ marginBottom: '1em', marginX: 'auto' }}
        />

        <CustomSelect
          data={categoryList}
          value={form.category}
          label="Category"
          labelId="category"
          handleChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
          variant="standard"
          required
          sx={{ width: '50%', marginBottom: '1em', marginX: 'auto' }}
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
        <UploadButton
          id="createpost"
          variant="outlined"
          progress={progress}
          loading={loading}
          fileName={fileName}
          wrapperStyle={{ width: '50%', margin: '1em auto' }}
          acceptOnlyFormats={['.png', '.jpg', '.jpeg']}
          handleRemoveFile={removeFile}
          handleFileChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              return onFileChange(e.target.files?.[0]);
            }
          }}
        />
        <Button sx={{ width: '50%', margin: '1em auto' }} variant="outlined" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Paper>
  );
};

export default CreatePost;
