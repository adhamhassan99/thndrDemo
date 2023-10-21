import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { COLORS } from '../constants/theme';

type Props = {
  onPress: () => void;
};

const CustomBtn = ({ onPress }: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.btnText}>Visit Website</Text>
    </Pressable>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryBlueLightest,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: COLORS.blueShadow,
    shadowOffset: { height: 0, width: 0 },
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  btnText: {
    color: COLORS.blueShadow,
    fontWeight: '700',
  },
});
