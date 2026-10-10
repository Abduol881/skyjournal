import { Link } from 'react-router-dom';
import Placeholder from '@/components/ui/Placeholder';

export default function Login() {
  return (
    <div className="border border-ink-100 rounded-2xl p-8">
      <Placeholder title="Login" description="Sign in to your journal." phase="Coming in Phase 1" />
      <p className="mt-6 text-sm text-ink-500">
        No account?{' '}
        <Link to="/signup" className="text-ink-900 font-medium underline">
          Create one
        </Link>
      </p>
    </div>
  );
}
