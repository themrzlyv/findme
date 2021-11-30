import React from 'react';
import { Route, Routes } from 'react-router';
import mainRoutes from '../../../mainRoutes';
import NotFound from '../../components/NotFound';
import Login from './pages/Login';
import Registration from './pages/Registration';

interface iProps {}

const Authentication: React.FC<iProps> = (): JSX.Element => {
  return (
    <Routes>
      <Route path={mainRoutes.login} element={<Login />} />
      <Route path={mainRoutes.registration} element={<Registration />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Authentication;
