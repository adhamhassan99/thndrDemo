import BottomSheet from '@gorhom/bottom-sheet';
import { FlashList } from '@shopify/flash-list';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
// import { SheetManager } from 'react-native-actions-sheet';

import { HomeHeader, SearchBar, StockCard } from '../components';
import { useGetTickerDetail, useGetTickers } from '../hooks';
import TickerDetailSheet from '../sheets/TickerDetailSheet';
import { IResult } from '../types/getAllTickers';
import { showErrorSheet } from '../utils';

const HomePage = () => {
  const TickerDetailSheetRef = useRef<BottomSheet>(null);

  const [searchValue, setSearchValue] = useState('');
  const [nextPageUrl, setNextPageUrl] = useState('');
  const [selectedTicker, setSelectedTicker] = useState('');
  const [allData, setAllData] = useState<IResult[]>([]); // Store all the data here

  const {
    error: allTickersError,
    data: allTickers,
    refetch,
    isRefetching,
    isLoading: allTickersLoading,
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
    if (TickerDetails?.results) {
      TickerDetailSheetRef.current?.expand();
    } else {
      // detailsError && SheetManager.show('ApiExceededSheet');
    }
  }, [TickerDetails, detailsError, TickerDetailSheetRef]);

  const filteredData = allData.filter(
    item =>
      item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.ticker.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const handlePress = useCallback(
    (ticker: string) => {
      ticker === selectedTicker
        ? TickerDetailSheetRef.current?.expand()
        : !isTickerDetailsLoading && setSelectedTicker(ticker);
    },
    [selectedTicker, isTickerDetailsLoading],
  );

  const handleCloseSheet = () => {
    setSelectedTicker('');
    TickerDetailSheetRef.current?.close();
  };

  return (
    <>
      <HomeHeader />
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <SearchBar value={searchValue} onChange={setSearchValue} />
        </View>
        <View style={{ flex: 1 }}>
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
        </View>
      </View>

      <BottomSheet
        enablePanDownToClose
        backgroundStyle={{ backgroundColor: '#242639' }}
        ref={TickerDetailSheetRef}
        snapPoints={['75%']}
        index={-1}>
        <TickerDetailSheet
          handleCloseSheet={handleCloseSheet}
          data={TickerDetails?.results}
        />
      </BottomSheet>
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
