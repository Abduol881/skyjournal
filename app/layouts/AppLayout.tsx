import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { to: '/app/dashboard', label: 'Dashboard' },
  { to: '/app/store', label: 'Store' },
  { to: '/app/sales', label: 'Sales' },
  { to: '/app/expenses', label: 'Expenses' },
  { to: '/app/debts', label: 'Debts' },
  { to: '/app/analytics/daily', label: 'Analytics' },
  { to: '/app/settings', label: 'Settings' },
];

export default function AppLayout() {
  return (
    <div className="min-h-screen flex bg-white text-black">
      <aside className="w-64 border-r border-ink-100 hidden md:flex flex-col">
        <div className="px-6 py-5 border-b border-ink-100">
          <NavLink to="/" className="text-lg font-bold tracking-tight">
            SkyJournal
          </NavLink>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-sm transition ${
                  isActive
                    ? 'bg-ink-900 text-white font-medium'
                    : 'text-ink-700 hover:bg-ink-50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="border-b border-ink-100 px-6 py-4 flex items-center justify-between">
          <div className="text-sm font-medium md:hidden">SkyJournal</div>
          <div className="flex items-center gap-4 ml-auto text-sm">
            <span className="text-ink-500">Business name</span>
            <div className="w-8 h-8 rounded-full bg-ink-900 text-white flex items-center justify-center text-xs font-bold">
              A
            </div>
          </div>
        </header>

        <main className="flex-1 px-6 py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
