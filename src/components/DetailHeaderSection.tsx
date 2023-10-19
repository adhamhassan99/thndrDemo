import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import HeaderTitle from './HeaderTitle';
import PlaceholderAvatar from './PlaceholderAvatar';
import SheetCloseBtn from './SheetCloseBtn';
import { IBranding } from '../types/getTickerDetails';

type Props = {
  branding: IBranding;
  ticker: string;
  price: number;
  handleCloseSheet: () => void;
};

const DetailHeaderSection = ({
  branding,
  ticker,
  price,
  handleCloseSheet,
}: Props) => {
  const brandPic = () => {
    if (branding) {
      return branding.icon_url ?? branding.logo_url;
    }
  };
  return (
    <View style={[styles.bottomLine, styles.row]}>
      <View style={styles.leftContainer}>
        {branding ? (
          <Image
            style={{ width: 50, height: 50, borderRadius: 5 }}
            source={{
              uri: brandPic(),
              headers: {
                Authorization: 'Bearer k2yBIxo18jH4UVJYKIAMETcJgGf5Ah8w',
              },
            }}
          />
        ) : (
          <PlaceholderAvatar ticker={ticker} />
        )}
        <HeaderTitle
          price={price ?? 2.55}
          title={ticker}
          percentage={price ? 2.5 : -4.9}
        />
      </View>
      <SheetCloseBtn handleCloseSheet={handleCloseSheet} />
    </View>
  );
};

export default DetailHeaderSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  about: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
  desc: {
    color: '#fff',
    opacity: 0.6,
    fontSize: 14,
  },
  descripContainer: {
    gap: 20,
  },
  bottomLine: {
    borderBottomWidth: 1,
    borderColor: '#323443',
    paddingVertical: 25,
  },
  leftContainer: {
    flexDirection: 'row',
    gap: 15,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
