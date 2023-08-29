import {View, Text,Button} from 'react-native';
import React from 'react';

const LoginScreen = ({navigation}) => {
  const goToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title="Go to Register" onPress={goToRegister} />
    </View>
  );
};

export default LoginScreen;
