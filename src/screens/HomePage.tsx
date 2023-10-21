import BottomSheet from '@gorhom/bottom-sheet';
import { FlashList } from '@shopify/flash-list';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Images from '../../assets/Images';
import { HomeHeader, SearchBar, StockCard } from '../components';
import { layouts } from '../constants/styles';
import { COLORS } from '../constants/theme';
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

        <View style={[layouts.flexed]}>
          <FlashList
            onRefresh={refetch}
            refreshing={isRefetching}
            onEndReachedThreshold={0.5}
            onEndReached={() => setNextPageUrl(allTickers?.next_url || '')}
            estimatedItemSize={178}
            numColumns={2}
            data={filteredData}
            ListEmptyComponent={
              <View style={styles.notfoundContainer}>
                <Image source={Images.notFound} />
              </View>
            }
            renderItem={item => (
              <StockCard
                onPress={() =>
                  isTickerDetailsLoading ? {} : handlePress(item.item.ticker)
                }
                company={item.item.name}
                ticker={item.item.ticker}
              />
            )}
          />
        </View>
      </View>

      <BottomSheet
        backgroundStyle={styles.sheetContainer}
        ref={TickerDetailSheetRef}
        snapPoints={['80%']}
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
    ...layouts.flexed,
    backgroundColor: COLORS.primaryBlueDefault,
    paddingHorizontal: 10,
  },
  searchContainer: {
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  sheetContainer: {
    backgroundColor: COLORS.primaryBlueLightest,
  },
  notfoundContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
