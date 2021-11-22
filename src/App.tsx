import React from 'react';
import { Routes, Route } from 'react-router-dom';

import mainRoutes from './mainRoutes';
import { Layout } from './ui/components/Layout';

import Home from './ui/pages/Home';
import Post from './ui/pages/Post';

const App:React.FC = () => {
    return (
      <Layout>
        <Routes>
          <Route element={<Home />} path={mainRoutes.home} />
          <Route element={<Post />} path={mainRoutes.post} />
        </Routes>
      </Layout>
    );
}

export default App;