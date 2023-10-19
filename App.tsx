import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
// import { SheetProvider } from 'react-native-actions-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import HomePage from './src/screens/HomePage';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <QueryClientProvider client={queryClient}>
          <HomePage />
        </QueryClientProvider>
      </GestureHandlerRootView>
    </>
  );
}
