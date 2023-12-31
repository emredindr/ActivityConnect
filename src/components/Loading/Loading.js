import React from 'react';
import LottieView from 'lottie-react-native';
const Loading = () => {
  return (
    <LottieView
      style={{flex: 1}}
      source={require('../../assets/loading.json')}
      autoPlay
      loop
    />
  );
};

export default Loading;
