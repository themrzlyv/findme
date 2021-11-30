import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { iRegistrationForm, socialNames } from '../../common/@types';
import {
  Typography,
  Paper,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Checkbox,
} from '@mui/material';
import UploadButton from '../../../../../components/UploadButton';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import useFileUpload from '../../../../../services/hooks/useFileUpload';
import error from '../../../../../services/QueryId/error';
import { toast } from 'react-toastify';

import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const Registration: React.FC = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { onFileChange, fileName, fileUrl, progress, loading, removeFile } = useFileUpload();

  const socials: iSocial[] = [
      { name: 'facebook', link: ''},
      {name: 'instagram', link: ''}, {name: 'twitter', link:''},{name: 'linkedin', link: ''}];'];

  const [form, setForm] = useState<iRegistrationForm>({
    name: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthDate: null,
    location: '',
    education: '',
    skills: '',
    job: '',
    Bio: '',
    image: '',
    socials: [],
    webSite: '',
    joinDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSave = () => {
    if (!form.name || !form.email || !form.password || !form.birthDate || !form.image) {
      return toast.error('Please fill all the fields', { toastId: error.CREATE_USER_ERROR });
    }
  };

  useEffect(() => {
    setForm((prev) => ({ ...prev, image: fileUrl }));
  }, [fileUrl]);

  return (
    <>
      <Paper>
        <Box component="div" display="flex" flexDirection="column" py={3}>
          <Box component="div" display="flex" marginY={5} sx={{ width: '50%', marginX: 'auto' }}>
            <Typography variant="h5" fontWeight="bold">
              Create a new post
            </Typography>
          </Box>
          <TextField
            label="Name"
            type="text"
            name="name"
            variant="standard"
            onChange={handleChange}
            sx={{ marginBottom: '1em', marginX: 'auto' }}
            required
          />
          <TextField
            label="Username"
            type="text"
            name="userName"
            variant="standard"
            onChange={handleChange}
            sx={{ marginBottom: '1rem', marginX: 'auto' }}
            required
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            variant="standard"
            onChange={handleChange}
            sx={{ marginBottom: '1rem', marginX: 'auto' }}
            required
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            variant="standard"
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ marginBottom: '1rem', marginX: 'auto' }}
            required
          />
          <TextField
            label="Confirm password"
            type="password"
            name="confirmPassword"
            variant="standard"
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ marginBottom: '1rem', marginX: 'auto' }}
            required
          />
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker
              disableFuture
              label="Birthday Date"
              openTo="year"
              views={['year', 'month', 'day']}
              value={form.birthDate}
              onChange={(newValue: Date | null) => {
                setForm((prev) => ({ ...prev, birthDate: newValue }));
              }}
              renderInput={(params: any) => (
                <TextField
                  variant="standard"
                  sx={{ marginBottom: '1rem', marginX: 'auto' }}
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
          <TextField
            label="Location"
            type="text"
            name="location"
            variant="standard"
            onChange={handleChange}
            sx={{ marginBottom: '1rem', marginX: 'auto' }}
            required
          />
          <TextField
            label="Education"
            type="text"
            name="education"
            variant="standard"
            onChange={handleChange}
            sx={{ marginBottom: '1rem', marginX: 'auto' }}
            required
          />
          <TextField
            label="Skills"
            type="text"
            name="skills"
            variant="standard"
            onChange={handleChange}
            sx={{ marginBottom: '1rem', marginX: 'auto' }}
            required
          />
          <TextField
            label="Job"
            type="text"
            name="job"
            variant="standard"
            onChange={handleChange}
            sx={{ marginBottom: '1rem', marginX: 'auto' }}
            required
          />
          <TextField
            label="Bio"
            type="text"
            name="bio"
            variant="standard"
            onChange={handleChange}
            sx={{ marginBottom: '1rem', marginX: 'auto' }}
            required
          />
          <UploadButton
            id="createUser"
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
          {socials.map((social) => (
            <Box key={social} component="div" display="flex">
              <Checkbox
                // checked={form.socials}
                value={social}
                onChange={(social) => {
                  setForm((prev) => ({
                    ...prev,
                    socials: [...prev.socials, { name: `${social}`, link: '' }],
                  }));
                }}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            </Box>
          ))}

          <Button sx={{ width: '50%', margin: '1em auto' }} variant="outlined" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default Registration;
