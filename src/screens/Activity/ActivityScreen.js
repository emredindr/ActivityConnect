import {StyleSheet, Text, View,Button} from 'react-native';
import React from 'react';

const ActivityScreen = ({navigation}) => {
  const goToActivityDetail = () => {
    navigation.navigate('ActivityDetail');
  };
  return (
    <View>
      <Text>ActivityScreen</Text>
      <Button title="Go to Activity Detail" onPress={goToActivityDetail} />
    </View>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({});
