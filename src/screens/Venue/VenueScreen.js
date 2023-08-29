import {StyleSheet, Text, View,Button} from 'react-native';
import React from 'react';

const VenueScreen = ({navigation}) => {
  const goToVenueDetail = () => {
    navigation.navigate('VenueDetail');
  };

  return (
    <View>
      <Text>VenueScreen</Text>
      <Button title="Go to Venue Detail" onPress={goToVenueDetail} />
    </View>
  );
};

export default VenueScreen;

const styles = StyleSheet.create({});
