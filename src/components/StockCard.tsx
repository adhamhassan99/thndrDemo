import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

import PlaceholderAvatar from './PlaceholderAvatar';
import { COLORS } from '../constants/theme';

type Props = {
  ticker: string;
  company: string;
  onPress?: () => void;
};

const StockCard = ({ company, ticker, onPress }: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <PlaceholderAvatar ticker={ticker} />
      <Text style={styles.ticker}>{ticker}</Text>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.company}>
        {company}
      </Text>
    </Pressable>
  );
};

export default StockCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryBlueLightest,
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 20,
    gap: 15,
    borderWidth: 1,
    borderColor: COLORS.mainBorderColor,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  ticker: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 16,
  },
  company: {
    color: COLORS.white,
    opacity: 0.7,
    fontSize: 12,
    maxWidth: '70%',
  },
});
