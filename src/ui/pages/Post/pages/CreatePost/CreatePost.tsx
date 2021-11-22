import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

interface iProps {
}

const CreatePost:React.FC<iProps> = (): JSX.Element => {
    const [form, setForm] = React.useState({ title: '', tags: '', category: '', content: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSave = (): void => {
        console.log(form);
    }

    return (
        <Box component="div">
            <TextField 
                label="Title"
                onChange={handleChange}
            />
            <TextField 
                label="Tags"
                onChange={handleChange}
            />
            <TextField 
                label="Category"
                onChange={handleChange}
            />
            <TextField 
                label="Content"
                onChange={handleChange}
            />
            <Button onClick={handleSave}>Save</Button>
        </Box>
    );
}

export default CreatePost;