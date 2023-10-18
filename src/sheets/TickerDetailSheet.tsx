import React from 'react';
import { Linking, StyleSheet, View } from 'react-native';
import ActionSheet, { SheetProps } from 'react-native-actions-sheet';

import {
  AboutSection,
  CustomBtn,
  DetailHeaderSection,
  StatisticsSection,
} from '../components';
import { IDetailResults } from '../types/getTickerDetails';

const TickerDetailSheet = (props: SheetProps) => {
  const { branding, description, homepage_url, name, ticker, market_cap } =
    props.payload as IDetailResults;

  const handleWebsitePress = () => {
    Linking.openURL(homepage_url ?? `https://www.google.com/search?q=${name}`);
  };

  return (
    <ActionSheet
      containerStyle={styles.sheetContainer}
      overlayColor="#0a0a10"
      id="TickerDetailSheet">
      <DetailHeaderSection
        branding={branding}
        ticker={ticker}
        price={market_cap}
      />
      <AboutSection description={description} />
      <StatisticsSection />

      <View style={{ marginTop: 'auto', marginBottom: 20 }}>
        <CustomBtn onPress={handleWebsitePress} />
      </View>
    </ActionSheet>
  );
};

export default TickerDetailSheet;

const styles = StyleSheet.create({
  sheetContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,

    backgroundColor: '#242639',
    minHeight: '70%',
  },
  statisticsContainer: {
    marginBottom: 50,
  },
  statisticContainer: {
    flexDirection: 'row',
  },
});
