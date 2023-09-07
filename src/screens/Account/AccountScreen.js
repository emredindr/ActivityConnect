import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountScreen = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    birthdate: '',
    phoneNumber: '',
    gender: '',
    userName: '',
    surname: '',
  });

  useEffect(() => {
    AsyncStorage.getItem('@USER').then(userSession => {
      userSession && setUserInfo(JSON.parse(userSession));
    });
  }, []);

  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20,
          marginBottom: 20,
        }}>
        Account Screen
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20,
          marginBottom: 20,
        }}>
        Name: {userInfo.name}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20,
          marginBottom: 20,
        }}>
        Surname: {userInfo.surname}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20,
          marginBottom: 20,
        }}>
        Email: {userInfo.email}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20,
          marginBottom: 20,
        }}>
        Username: {userInfo.userName}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20,
          marginBottom: 20,
        }}>
        Phone Number: {userInfo.phoneNumber}
      </Text>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
