import { createBrowserRouter } from 'react-router-dom';
import { Home, Restaurant, Schedules } from '../pages';
import { AppLayout } from '../styles/layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'restaurants/:restaurantId?',
        element: <Restaurant />
      },
      {
        path: 'schedules/:restaurantId',
        element: <Schedules />
      }
    ]
  }
]);

export default router;
