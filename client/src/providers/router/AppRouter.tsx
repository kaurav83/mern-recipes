import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routeConfig } from '../../config/routeConfig';
import { Loader } from '../../shared/Loader/Loader';

export const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map(({ element, path }) => (
      <Route
        key={path}
        path={path}
        element={(
          <Suspense fallback={<Loader />}>
            <div className="page-wrapper">{element}</div>
          </Suspense>
        )}
      />
    ))}
  </Routes>
);
