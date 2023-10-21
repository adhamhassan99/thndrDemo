import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Images from '../../assets/Images';
import { COLORS } from '../constants/theme';
import { MainStackParamList } from '../navigators/MainNavigator';

const Landing = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  useEffect(() => {
    const timer = setTimeout(() => navigation.navigate('HomePage'), 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Images.mainLogo} />
      </View>

      <Text style={styles.credits}>{'By \nAdham Hassan'}</Text>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryBlueDefault,
    paddingTop: 20,
    paddingBottom: 40,
  },
  credits: {
    textAlign: 'center',
    color: COLORS.white,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
