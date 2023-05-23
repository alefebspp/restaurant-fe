import { createBrowserRouter } from 'react-router-dom';
import { Home, Restaurant } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/resturants',
    element: <Restaurant />
  }
]);

export default router;
