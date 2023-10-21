import React from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';
// import { SheetManager } from 'react-native-actions-sheet';

import Images from '../../assets/Images';
import { COLORS } from '../constants/theme';

const SheetCloseBtn = ({
  handleCloseSheet,
}: {
  handleCloseSheet: () => void;
}) => {
  return (
    <Pressable onPress={handleCloseSheet} style={styles.container}>
      <Image source={Images.close} />
    </Pressable>
  );
};

export default SheetCloseBtn;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: COLORS.mainBorderColor,
    padding: 15,
  },
});
