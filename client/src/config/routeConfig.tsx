import { type RouteProps } from 'react-router-dom';

import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { SaladDashboardPage } from '../pages/SaladDashboardPage';
import { SaladPage } from '../pages/SaladPage';

export enum AppRoutes {
  MAIN = 'main',
  SALAD = 'salad-details',
  NOT_FOUND = 'not_found',
}

export const RoutePath: { [key in AppRoutes]: string } = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.SALAD]: '/salad-details/:id',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: { [key in AppRoutes]: RouteProps } = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <SaladDashboardPage />,
  },
  [AppRoutes.SALAD]: {
    path: RoutePath['salad-details'],
    element: <SaladPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
