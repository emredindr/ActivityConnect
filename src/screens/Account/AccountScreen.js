import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountScreen = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    AsyncStorage.getItem('@USER').then(userSession => {
      userSession && setUserInfo(JSON.parse(userSession));
    });
  }, []);

  return (
    <View>
      <Text>{userInfo.name}</Text>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
