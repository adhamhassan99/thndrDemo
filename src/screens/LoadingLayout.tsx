import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import animations from '../../assets/animations';

const LoadingLayout = () => {
  return (
    <View style={styles.container}>
      <LottieView
        onAnimationFailure={e => console.log(e)}
        style={{ flex: 1, width: '100%', height: '100%' }}
        autoPlay
        loop
        source={animations.loading}
      />
    </View>
  );
};

export default LoadingLayout;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
    backgroundColor: 'black',
    opacity: 0.3,
  },
});
