import React from 'react';
import { Text, Image, StyleSheet, Pressable, Linking } from 'react-native';

import Images from '../../assets/Images';

type Props = {
  ticker: string;
  company: string;
  onPress?: () => void;
};

const StockCard = ({ company, ticker, onPress }: Props) => {
  return (
    <Pressable
      onPress={() =>
        Linking.openURL('https://www.google.com')
          .then(data => console.log(data))
          .catch(e => console.log(e))
      }
      style={styles.container}>
      <Image source={Images.apple} />
      <Text style={styles.ticker}>{ticker}</Text>
      <Text style={styles.company}>{company}</Text>
    </Pressable>
  );
};

export default StockCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#242639',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 20,
    gap: 15,
    borderWidth: 1,
    borderColor: '#323443',
  },
  ticker: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  company: {
    color: 'white',
    opacity: 0.7,
    fontSize: 12,
  },
});
