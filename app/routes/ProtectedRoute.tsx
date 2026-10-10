import { Outlet } from 'react-router-dom';

// TODO Phase 1: check session and redirect to /login if missing
export default function ProtectedRoute() {
  return <Outlet />;
}
