import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Images from '../../assets/Images';
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
    backgroundColor: '#151622',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 25,
  },
});
