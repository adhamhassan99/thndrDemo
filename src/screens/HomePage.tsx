import { FlashList } from '@shopify/flash-list';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { SheetManager } from 'react-native-actions-sheet';

import { HomeHeader, SearchBar, StockCard } from '../components';
import { useGetTickerDetail, useGetTickers } from '../hooks';
import { IResult } from '../types/getAllTickers';
import { showErrorSheet } from '../utils';

const HomePage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [nextPageUrl, setNextPageUrl] = useState('');
  const [selectedTicker, setSelectedTicker] = useState('');
  const [allData, setAllData] = useState<IResult[]>([]); // Store all the data here

  const {
    error: allTickersError,
    data: allTickers,
    refetch,
    isRefetching,
  } = useGetTickers(nextPageUrl);
  const {
    error: detailsError,
    data: TickerDetails,
    isLoading: isTickerDetailsLoading,
  } = useGetTickerDetail(selectedTicker);

  useEffect(() => {
    if (allTickers?.results) {
      setAllData(prevData => [...prevData, ...allTickers?.results]);
    } else {
      allTickersError && showErrorSheet();
    }
  }, [allTickers, allTickersError]);

  useEffect(() => {
    setSelectedTicker('');
    if (TickerDetails?.results) {
      SheetManager.show('TickerDetailSheet', {
        payload: { ...TickerDetails.results },
      });
    } else {
      detailsError && SheetManager.show('ApiExceededSheet');
    }
  }, [TickerDetails, detailsError]);

  const filteredData = allData.filter(
    item =>
      item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.ticker.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const handlePress = useCallback(
    (ticker: string) => {
      !isTickerDetailsLoading && setSelectedTicker(ticker);
    },
    [selectedTicker, isTickerDetailsLoading],
  );

  return (
    <>
      <HomeHeader />
      {isTickerDetailsLoading && <ActivityIndicator />}
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <SearchBar value={searchValue} onChange={setSearchValue} />
        </View>
        {/* <View style={{ flex: 1 }}>
          <FlashList
            onRefresh={refetch}
            refreshing={isRefetching}
            onEndReachedThreshold={0.5}
            onEndReached={() => setNextPageUrl(allTickers?.next_url || '')}
            estimatedItemSize={178}
            numColumns={2}
            data={filteredData}
            renderItem={item => (
              <StockCard
                onPress={() =>
                  isTickerDetailsLoading ? {} : handlePress(item.item.ticker)
                }
                company={item.item.name}
                ticker={item.item.ticker}
              />
              // <LoadingPlaceholder isLoading={isLoading} />
            )}
          />
        </View> */}
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
