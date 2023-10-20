import React from 'react';
import { Linking, StyleSheet, View } from 'react-native';

import {
  AboutSection,
  CustomBtn,
  DetailHeaderSection,
  StatisticsSection,
} from '../components';
import { IDetailResults } from '../types/getTickerDetails';

type Props = {
  data?: IDetailResults;
  handleCloseSheet: () => void;
};

const TickerDetailSheet = (props: Props) => {
  if (props.data) {
    const { branding, description, homepage_url, name, ticker, market_cap } =
      props.data as IDetailResults;

    const handleWebsitePress = () => {
      Linking.openURL(
        homepage_url ?? `https://www.google.com/search?q=${name}`,
      );
    };

    return (
      <View style={styles.sheetContainer}>
        <DetailHeaderSection
          handleCloseSheet={props.handleCloseSheet}
          branding={branding}
          ticker={ticker}
          price={market_cap}
        />
        <AboutSection description={description} />
        <StatisticsSection />

        <View style={{ marginTop: 'auto', marginBottom: 20 }}>
          <CustomBtn onPress={handleWebsitePress} />
        </View>
      </View>
    );
  }
};

export default TickerDetailSheet;

const styles = StyleSheet.create({
  sheetContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,

    backgroundColor: '#242639',
  },
  statisticsContainer: {
    marginBottom: 50,
  },
  statisticContainer: {
    flexDirection: 'row',
  },
});
