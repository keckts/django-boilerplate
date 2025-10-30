import { createBrowserRouter } from 'react-router';

import { usersLoader } from '@/js/loaders';
import Index from '@/js/pages/Index';
import Login from '@/js/pages/Login';
import Signup from '@/js/pages/Signup';
import Dashboard from '@/js/pages/Dashboard';
import Users from '@/js/pages/Users';

const router = createBrowserRouter([
  { index: true, Component: Index },
  { path: 'login', Component: Login },
  { path: 'signup', Component: Signup },
  { path: 'dashboard', Component: Dashboard },
  { path: 'users', Component: Users, loader: usersLoader },
]);

export default router;
