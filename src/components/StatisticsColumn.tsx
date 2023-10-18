import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
  title: string;
  subTitle: string;
};

const StatisticsColumn = ({ subTitle, title }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

export default StatisticsColumn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
  },
  title: {
    color: 'white',
    opacity: 0.6,
    fontSize: 15,
  },
  subTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
  },
});
