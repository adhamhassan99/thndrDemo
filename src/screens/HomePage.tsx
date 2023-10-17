import { FlashList } from '@shopify/flash-list';
import React, { useMemo, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { HomeHeader, SearchBar, StockCard } from '../components';
import { useGetTickers } from '../hooks';
import LoadingPlaceholder from '../components/LoadingPlaceholder';

const HomePage = () => {
  const [searchValue, setSearchValue] = useState('');
  const { data, isLoading } = useGetTickers();

  const filteredData = useMemo(
    () =>
      data?.results.filter(
        item =>
          item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.ticker.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    [searchValue, data],
  );

  return (
    <>
      <HomeHeader />
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <SearchBar value={searchValue} onChange={setSearchValue} />
        </View>
        <View style={{ flex: 1 }}>
          <>
            <FlashList
              estimatedItemSize={178}
              numColumns={2}
              data={filteredData}
              renderItem={item => (
                <StockCard company={item.item.name} ticker={item.item.ticker} />
                // <LoadingPlaceholder isLoading={isLoading} />
              )}
            />
          </>
        </View>
      </View>
    </>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F202F',
    paddingHorizontal: 10,
  },
  searchContainer: {
    paddingHorizontal: 10,
    marginVertical: 20,
  },
});
