import { Navigate, Route, Routes } from 'react-router';

import { Dashboard } from './pages/Dashboard';
import { NotFount } from './pages/NotFount';
import Transactions from './pages/Transactions';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="dashboard" />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="history" element={<Transactions />} />
      <Route path="*" element={<NotFount />} />
    </Routes>
  );
};
