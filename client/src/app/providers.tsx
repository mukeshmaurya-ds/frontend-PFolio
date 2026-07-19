"use client";

import type { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

/**
 * Global application providers.
 *
 * Add ThemeProvider, QueryClientProvider,
 * AuthProvider, ToastProvider, etc. here
 * as the application grows.
 */
export default function Providers({
  children,
}: ProvidersProps) {
  return <>{children}</>;
}