import { Link, Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <header className="px-6 py-6">
        <Link to="/" className="text-xl font-bold tracking-tight">
          SkyJournal
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </main>

      <footer className="px-6 py-6 text-center text-sm text-ink-500">
        © {new Date().getFullYear()} SkyJournal
      </footer>
    </div>
  );
}
