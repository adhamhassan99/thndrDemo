import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
  price: number;
  percentage: number;
};

const HeaderTitle = ({ title, price, percentage }: Props) => {
  const isPositive = percentage >= 0;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.ind}>
        <Text style={[styles.indText]}>
          {/* //TODO: replace with real price when available from api */}$
          {(price / 10000000000).toFixed(2)}
        </Text>
        <Text
          style={[
            styles.indText,
            isPositive ? styles.positive : styles.negative,
          ]}>
          {isPositive ? '+' : ''} {percentage}%
        </Text>
      </View>
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    color: 'white',
  },
  ind: {
    flexDirection: 'row',
    gap: 5,
  },
  indText: {
    fontSize: 15,
    fontWeight: '700',
    color: 'white',
  },
  positive: {
    color: '#22FF95',
  },
  negative: {
    color: '#da3f07',
  },
});
