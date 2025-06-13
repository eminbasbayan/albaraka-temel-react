import { createBrowserRouter } from 'react-router-dom';
import mainRoutes from './MainRoutes';
import authRoutes from './AuthRoutes';
import adminRoutes from './AdminRoutes';
import Page404 from '../pages/Page404';

const router = createBrowserRouter([
  ...mainRoutes,
  ...authRoutes,
  ...adminRoutes,
  {
    path: '*',
    element: <Page404 />,
  },
]);


export default router