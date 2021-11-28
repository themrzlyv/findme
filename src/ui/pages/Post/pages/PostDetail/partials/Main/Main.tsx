import { Avatar, CardMedia, Chip, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { iPost } from '../../../../common/@types';

import TagIcon from '@mui/icons-material/Tag';

interface iProps {
  post: iPost;
}

const Main: React.FC<iProps> = ({ post }): JSX.Element => {
  return (
    <>
      <Box component="main" flex={8}>
        <Paper elevation={3}>
          <Box component="div" display="flex" flexDirection="column" padding={2}>
            <CardMedia component="img" image={post.image} alt={post.title} />
            <Box component="div" display="flex" marginBottom={2} paddingY={2}>
              <Avatar alt={post.title} src={post.image} />
              <Box component="div" display="flex" flexDirection="column" ml={1}>
                <Typography variant="subtitle2">John Doe</Typography>
                <Typography variant="subtitle2" fontWeight="light">
                  Posted on Nov 27
                </Typography>
              </Box>
            </Box>
            <Box component="div" display="flex" flexDirection="column" marginBottom={2}>
              <Typography variant="h4" fontWeight="bold" marginBottom={2}>
                {post.title}
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight="light"
                fontStyle="italic"
                marginBottom={2}
              >
                {post.category}
              </Typography>
              <Stack direction="row" spacing={1} marginBottom={5}>
                {post.tags.map((tag) => (
                  <Chip key={tag} icon={<TagIcon />} label={tag} />
                ))}
              </Stack>
              <Typography variant="body1">{post.content}</Typography>
            </Box>
            <Box component="div" display="flex" flexDirection="column" marginBottom={2}>
              <Typography variant="h5" fontWeight="bold">
                Discussion (n)
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Main;
