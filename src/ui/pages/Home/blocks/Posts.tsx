import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import { postSelector } from '../../../../services/selectors';
import Post from './../components/Post';

interface iProps {}

const Posts: React.FC<iProps> = (): JSX.Element => {
  const { posts } = useSelector(postSelector);
  return (
    <Box
      component="div"
      display="flex"
      justifyContent="space-around"
      flexWrap="wrap"
      sx={{ width: '100%' }}
    >
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Box>
  );
};

export default Posts;
