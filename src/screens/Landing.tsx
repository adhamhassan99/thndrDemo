import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Images from '../../assets/Images';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../navigators/MainNavigator';

const Landing = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  useEffect(() => {
    let timer = setTimeout(() => navigation.navigate('HomePage'), 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
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
    backgroundColor: '#1F202F',
    paddingTop: 20,
    paddingBottom: 40,
  },
  credits: {
    // marginTop: 'auto',
    textAlign: 'center',
    color: 'white',
  },
});
