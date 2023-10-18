import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

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
    backgroundColor: '#242639',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: '#40AFFF',
    shadowOffset: { height: 0, width: 0 },
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  btnText: {
    color: '#40AFFF',
    fontWeight: '700',
  },
});
