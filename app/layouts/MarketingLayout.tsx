import { Link, Outlet } from 'react-router-dom';

export default function MarketingLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <header className="border-b border-ink-100">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight">
            SkyJournal
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/features" className="hover:text-ink-500">
              Features
            </Link>
            <Link to="/pricing" className="hover:text-ink-500">
              Pricing
            </Link>
            <Link to="/about" className="hover:text-ink-500">
              About
            </Link>
            <Link to="/contact" className="hover:text-ink-500">
              Contact
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 border border-ink-900 rounded-full font-medium hover:bg-ink-900 hover:text-white transition"
            >
              Login
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-ink-100">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-ink-500 flex justify-between">
          <span>© {new Date().getFullYear()} SkyJournal</span>
          <span>Built for small resellers</span>
        </div>
      </footer>
    </div>
  );
}
