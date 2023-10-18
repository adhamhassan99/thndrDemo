import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  ticker: string;
};

const PlaceholderAvatar = ({ ticker }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ticker.substring(0, 2)}</Text>
    </View>
  );
};

export default PlaceholderAvatar;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#323443',
    borderRadius: 10,
  },
  text: {
    color: 'white',
  },
});
