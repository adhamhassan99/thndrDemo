import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
// import { SheetProvider } from 'react-native-actions-sheet';

import HomePage from './src/screens/HomePage';
import './src/sheets/sheets';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <SheetProvider> */}
        <HomePage />
        {/* </SheetProvider> */}
      </QueryClientProvider>
    </>
  );
}
