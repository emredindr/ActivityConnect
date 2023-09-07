import {View, Text, Button, TextInput, TouchableOpacity} from 'react-native';
import React, {useState, useContext} from 'react';
import {Context as AuthContext} from '../../context/AuthContext';
import styles from './LoginScreen.Style';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('asd@asd.com');
  const [password, setPassword] = useState('asd123asd');
  const {signin} = useContext(AuthContext);

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hoşgeldiniz</Text>
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
        title="Giriş Yap"
        onPress={() => signin({email, password})}
        color="#007aff"
        accessibilityLabel="Sign In Button"
      />

      <TouchableOpacity onPress={navigateToRegister}>
        <Text style={styles.registerText}>Hesabınız yok mu? Üye olmak için tıklayınız.</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
