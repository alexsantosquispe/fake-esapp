import { Navigate, Route, Routes } from 'react-router';
import { Suspense, lazy } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Transactions = lazy(() => import('./pages/Transactions'));
const NotFound = lazy(() => import('./pages/NotFount'));

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="dashboard" />} />

      <Route
        path="dashboard"
        element={
          <Suspense fallback={<div className="min-h-screen">Loading...</div>}>
            <Dashboard />
          </Suspense>
        }
      />

      <Route
        path="transactions"
        element={
          <Suspense fallback={<div className="min-h-screen">Loading...</div>}>
            <Transactions />
          </Suspense>
        }
      />

      <Route
        path="*"
        element={
          <Suspense fallback={<div className="min-h-screen">Loading...</div>}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
};
