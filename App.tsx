import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { HomeHeader, SearchBar, StockCard } from './src/components';

export default function App() {
  return (
    <>
      <HomeHeader />
      <View style={styles.container}>
        <StatusBar style="auto" />
        <SearchBar />
        <View style={{ flexDirection: 'row', gap: 20 }}>
          <StockCard company="Apple" ticker="AAPL" />
          <StockCard company="Apple" ticker="AAPL" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F202F',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
