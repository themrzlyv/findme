import React from 'react';
import { Routes, Route } from 'react-router-dom';
import mainRoutes from '../../../mainRoutes';
import { CreatePost } from './pages/CreatePost';

const Post:React.FC = () => {
    return (
        <Routes>
            <Route  path={mainRoutes.createPost} element={<CreatePost />} />
        </Routes>
    );
}

export default Post;