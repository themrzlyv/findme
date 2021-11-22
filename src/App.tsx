import React from 'react';
import { Routes, Route } from 'react-router-dom';

import mainRoutes from './mainRoutes';
import Home from './ui/Home';

const App:React.FC = () => {
    return (
        <Routes>
          <Route element={<Home />} path={mainRoutes.home} />
        </Routes>
    );
}

export default App;