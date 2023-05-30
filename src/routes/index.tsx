import { createBrowserRouter } from 'react-router-dom';
import { CheckSchedule, Home, Restaurant, Schedules } from '../pages';
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
      },
      {
        path: 'check-schedules',
        element: <CheckSchedule />
      }
    ]
  }
]);

export default router;
