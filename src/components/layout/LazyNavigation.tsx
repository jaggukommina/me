'use client';

import { lazy, Suspense } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

const Navigation = lazy(() => import('./Navigation'));

export default function LazyNavigation() {
  return (
    <Suspense fallback={<LoadingSpinner size="small" />}>
      <Navigation />
    </Suspense>
  );
}
