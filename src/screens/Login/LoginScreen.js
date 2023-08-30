import {StyleSheet, View, Text, Button, TextInput} from 'react-native';
import React, {useState, useContext} from 'react';
import {Context as AuthContext} from '../../context/AuthContext';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('asd@asd.com');
  const [password, setPassword] = useState('asd123asd');
  const {signin} = useContext(AuthContext);

  const goToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      {/* {state.errorMessage ? (
        <Text style={{color: 'red'}}>{state.errorMessage}</Text>
      ) : null} */}
      <Button title="Login" onPress={() => signin({email, password})} />
      <Button title="Go to Register" onPress={goToRegister} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});
