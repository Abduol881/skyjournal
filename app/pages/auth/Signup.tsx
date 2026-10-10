import { Link } from 'react-router-dom';
import Placeholder from '@/components/ui/Placeholder';

export default function Signup() {
  return (
    <div className="border border-ink-100 rounded-2xl p-8">
      <Placeholder title="Create account" description="Start your journal in 30 seconds." phase="Coming in Phase 1" />
      <p className="mt-6 text-sm text-ink-500">
        Already have an account?{' '}
        <Link to="/login" className="text-ink-900 font-medium underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
