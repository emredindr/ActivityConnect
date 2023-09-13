import LottieView from 'lottie-react-native';

const NetworkError = () => {
  return (
    <LottieView
      source={require('../../assets/networkError.json')}
      autoPlay
      loop
    />
  );
};

export default NetworkError;
