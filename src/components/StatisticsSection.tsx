import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StatisticsColumn from './StatisticsColumn';

const StatisticsSection = () => {
  return (
    <View style={[styles.statisticsContainer, styles.bottomLine]}>
      <Text style={styles.title}>STATISTICS</Text>
      <View style={[styles.statisticContainer]}>
        <StatisticsColumn
          title="Open"
          subTitle="$3.55
"
        />
        <StatisticsColumn
          title="Close"
          subTitle="$3.55
"
        />
      </View>
      <View style={[styles.statisticContainer]}>
        <StatisticsColumn
          title="High"
          subTitle="$3.55
"
        />
        <StatisticsColumn
          title="Low"
          subTitle="$3.55
"
        />
      </View>
    </View>
  );
};

export default StatisticsSection;

const styles = StyleSheet.create({
  bottomLine: {
    borderBottomWidth: 1,
    borderColor: '#323443',
    paddingVertical: 25,
  },
  statisticsContainer: {
    marginBottom: 50,
  },
  statisticContainer: {
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
    marginBottom: 20,
  },
});
