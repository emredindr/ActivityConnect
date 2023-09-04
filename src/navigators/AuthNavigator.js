import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountScreen from '../screens/Account/AccountScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useContext, useEffect, useState} from 'react';
import {Context as AuthContext} from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Pressable} from 'react-native';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  const {state, signout} = useContext(AuthContext);
  const [user, setUser] = useState();

  const checkUserSession = async () => {
    const userSession = JSON.parse(await AsyncStorage.getItem('@USER'));
    if (userSession) {
      setUser(userSession);
    } else {
      setUser(null);
    }
  };
  useEffect(() => {
    checkUserSession();
  }, [state]);

  return (
    <Stack.Navigator>
      {user != null ? (
        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{
            headerTitleAlign: 'center',
            headerTitle: 'Hesabım',
            headerRight: () => (
              <Pressable onPress={signout}>
                <Icon name="logout" size={30} color="#900" />
              </Pressable>
            ),
          }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            // options={{headerTitleAlign: 'center', headerTitle: 'Giriş Yap'}}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{headerTitleAlign: 'center', headerTitle: 'Üye Ol'}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
