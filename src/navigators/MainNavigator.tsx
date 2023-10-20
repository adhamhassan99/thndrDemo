import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { HomePage, Landing } from '../screens';
export type MainStackParamList = {
  LandingPage: undefined;
  HomePage: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="LandingPage" component={Landing} />
      <MainStack.Screen name="HomePage" component={HomePage} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
