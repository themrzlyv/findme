import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import mainRoutes from './mainRoutes';
import FallBackUi from './ui/components/FallBackUi';
import { Layout } from './ui/components/Layout';

import Home from './ui/pages/Home';

const Post = lazy(() => import('./ui/pages/Post'));

const App: React.FC = () => {
  return (
    <Layout>
      <Suspense fallback={<FallBackUi />}>
        <Routes>
          <Route element={<Home />} path={mainRoutes.home} />
          <Route element={<Post />} path={mainRoutes.post} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
