import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
// import { SheetProvider } from 'react-native-actions-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { MainNavigator } from './src/navigators';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <QueryClientProvider client={queryClient}>
            <MainNavigator />
          </QueryClientProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
}
