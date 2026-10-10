import { Routes, Route, Navigate } from 'react-router-dom';

import MarketingLayout from './layouts/MarketingLayout';
import AuthLayout from './layouts/AuthLayout';
import AppLayout from './layouts/AppLayout';
import ProtectedRoute from './routes/ProtectedRoute';

// Public
import Index from './pages/Index';
import Pricing from './pages/marketing/Pricing';
import Features from './pages/marketing/Features';
import About from './pages/marketing/About';
import Contact from './pages/marketing/Contact';

// Auth
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';

// Journal
import Dashboard from './pages/dashboard/Dashboard';
import Store from './pages/store/Store';
import Sales from './pages/sales/Sales';
import Expenses from './pages/expenses/Expenses';
import Debts from './pages/debts/Debts';
import Settings from './pages/settings/Settings';
import Daily from './pages/analytics/Daily';
import Weekly from './pages/analytics/Weekly';
import Monthly from './pages/analytics/Monthly';
import Quarterly from './pages/analytics/Quarterly';
import Yearly from './pages/analytics/Yearly';

export default function App() {
  return (
    <Routes>
      {/* Public */}
      <Route element={<MarketingLayout />}>
        <Route path="/" element={<Index />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Auth */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>

      {/* Journal (protected) */}
      <Route element={<ProtectedRoute />}>
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate to="/app/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="store" element={<Store />} />
          <Route path="sales" element={<Sales />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="debts" element={<Debts />} />
          <Route path="analytics/daily" element={<Daily />} />
          <Route path="analytics/weekly" element={<Weekly />} />
          <Route path="analytics/monthly" element={<Monthly />} />
          <Route path="analytics/quarterly" element={<Quarterly />} />
          <Route path="analytics/yearly" element={<Yearly />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
