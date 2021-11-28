import React from 'react';
import { Routes, Route } from 'react-router-dom';
import mainRoutes from '../../../mainRoutes';
import { CreatePost } from './pages/CreatePost';
import PostDetail from './pages/PostDetail';

const Post: React.FC = () => {
  return (
    <Routes>
      <Route path={mainRoutes.createPost} element={<CreatePost />} />
      <Route path={mainRoutes.postDetail} element={<PostDetail />} />
    </Routes>
  );
};

export default Post;
