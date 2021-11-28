import { Avatar, CardMedia, Chip, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../../../../../services/api/api.posts';
import { postSelector } from '../../../../../services/selectors';
import { iPost } from '../../common/@types';
import { clearPost, getPost, setError, setLoading } from '../../common/redux/Post.Slice';
import useRouter from './../../../../../services/hooks/useRouter';

import ControllerBar from './partials/ControllerBar/ControllerBar';
import Main from './partials/Main/Main';
import UserAvatar from './partials/UserAvatar';

interface iProps {}

const PostDetail: React.FC<iProps> = (): JSX.Element | null => {
  const dispatch = useDispatch();
  const { query } = useRouter();

  const { post, isLoading, error } = useSelector(postSelector);

  useEffect(() => {
    if (query.id) {
      dispatch(setLoading(true));
      fetchPost(query.id)
        .then((res) => {
          dispatch(getPost(res));
          dispatch(setLoading(false));
        })
        .catch((err) => {
          dispatch(setLoading(false));
          dispatch(setError(err));
        });
    }

    return () => {
      dispatch(clearPost());
    };
  }, [query.id]);

  if (isLoading) {
    return (
      <Box component="div">
        <Typography variant="h4">Loading...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box component="div">
        <Typography variant="h4">Error...</Typography>
      </Box>
    );
  }

  if (post) {
    return (
      <Box component="section" display="flex" gap={1} height="250vh" position="relative">
        <ControllerBar />
        <Main post={post} />
        <UserAvatar />
      </Box>
    );
  }

  return null;
};

export default PostDetail;
