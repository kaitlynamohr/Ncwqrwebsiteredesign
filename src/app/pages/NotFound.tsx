import { Link } from 'react-router';
import { Droplets, ArrowLeft } from 'lucide-react';

const BLUE = '#1B4F8A';

export function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 pt-20"
      style={{ backgroundColor: '#F8FAFC' }}
    >
      <div className="text-center max-w-md">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: '#EBF3FB' }}
        >
          <Droplets className="w-10 h-10" style={{ color: BLUE }} />
        </div>
        <h1 style={{ fontSize: '6rem', fontWeight: 800, color: '#D1E4F5', lineHeight: 1 }}>404</h1>
        <h2 className="mt-4 mb-3" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2942' }}>
          Page Not Found
        </h2>
        <p className="text-gray-500 text-sm mb-8">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white transition-all"
          style={{ backgroundColor: BLUE }}
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
