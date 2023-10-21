import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';

import Images from '../../assets/Images';
import { COLORS } from '../constants/theme';
const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image source={Images.nasdaq} />
      </SafeAreaView>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryBlueDark,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 25,
  },
});
