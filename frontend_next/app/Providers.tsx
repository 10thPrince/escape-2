'use client';

import StoreProvider from '@/redux/StoreProvider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>;
}
