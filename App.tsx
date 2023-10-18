// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
// import { SheetProvider } from 'react-native-actions-sheet';

import './src/sheets/sheets';
import HomePage from './src/screens/HomePage';

export default function App() {
  // const queryClient = new QueryClient();

  return (
    <>
      {/* <SheetProvider> */}
      {/* <QueryClientProvider client={queryClient}> */}
      <HomePage />
      {/* </QueryClientProvider> */}
      {/* </SheetProvider> */}
    </>
  );
}
