import React, { SetStateAction } from 'react';
import { Pressable, StyleSheet, TextInput } from 'react-native';

import { COLORS } from '../constants/theme';

type Props = {
  value: string;
  onChange: React.Dispatch<SetStateAction<string>>;
};

const SearchBar = ({ onChange, value }: Props) => {
  return (
    <Pressable style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="Search for stocks"
        placeholderTextColor="rgba(255, 255, 255, 0.25)"
        style={styles.textInput}
      />
    </Pressable>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryBlueLightest,
    borderWidth: 1,
    borderColor: COLORS.mainBorderColor,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  textInput: {
    fontSize: 16,
    padding: 0,
    color: COLORS.white,
  },
});
