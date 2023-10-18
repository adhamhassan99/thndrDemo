import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { VALUES } from '../constants';
type Props = {
  description: string;
};

const AboutSection = ({ description }: Props) => {
  return (
    <View style={[styles.descripContainer, styles.bottomLine]}>
      <Text style={styles.about}>About</Text>
      <Text numberOfLines={7} ellipsizeMode="clip" style={styles.desc}>
        {description ?? VALUES.lorem}
      </Text>
    </View>
  );
};

export default AboutSection;

const styles = StyleSheet.create({
  about: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
  desc: {
    color: '#fff',
    opacity: 0.6,
    fontSize: 14,
  },
  descripContainer: {
    gap: 20,
  },
  bottomLine: {
    borderBottomWidth: 1,
    borderColor: '#323443',
    paddingVertical: 25,
  },
});
