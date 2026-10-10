import { Link } from 'react-router-dom';
import Placeholder from '@/components/ui/Placeholder';

export default function ForgotPassword() {
  return (
    <div className="border border-ink-100 rounded-2xl p-8">
      <Placeholder title="Forgot password" description="We'll send a reset link to your email." phase="Coming in Phase 1" />
      <p className="mt-6 text-sm text-ink-500">
        <Link to="/login" className="text-ink-900 font-medium underline">
          Back to login
        </Link>
      </p>
    </div>
  );
}
