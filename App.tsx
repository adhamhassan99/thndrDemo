import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import './src/sheets/sheets';
import HomePage from './src/screens/HomePage';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    </>
  );
}
