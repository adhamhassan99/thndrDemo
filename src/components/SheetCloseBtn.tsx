import React from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';
// import { SheetManager } from 'react-native-actions-sheet';

import Images from '../../assets/Images';

const SheetCloseBtn = () => {
  return (
    <Pressable
      // onPress={() => SheetManager.hide('TickerDetailSheet')}
      style={styles.container}>
      <Image source={Images.close} />
    </Pressable>
  );
};

export default SheetCloseBtn;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#323443',
    padding: 15,
  },
});
