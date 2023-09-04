import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {Context as AuthContext} from '../../context/AuthContext';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('asd@asd.com');
  const [password, setPassword] = useState('asd123asd');
  const {signin} = useContext(AuthContext);

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <Button
        title="Sign In"
        onPress={() => signin({email, password})}
        color="#007aff"
        accessibilityLabel="Sign In Button"
      />

      <TouchableOpacity onPress={navigateToRegister}>
        <Text style={styles.registerText}>
          Don't have an account? Register here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  registerText: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});
