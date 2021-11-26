import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../../../../services/api/api.posts';
import { getAllPosts } from '../../Post/common/redux/Post.Slice';
import Posts from '../blocks/Posts';

interface iProps {}

const Body: React.FC<iProps> = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPosts().then((posts) => dispatch(getAllPosts(posts)));
  }, []);

  return (
    <Box component="div" display="flex" padding={2}>
      <Posts />
    </Box>
  );
};

export default Body;
