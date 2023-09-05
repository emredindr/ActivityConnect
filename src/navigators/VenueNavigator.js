import React from 'react';
import VenueScreen from '../screens/Venue/VenueScreen';
import VenueDetailScreen from '../screens/VenueDetail/VenueDetailScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const VenueStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerTitleAlign: 'center', title: 'Mekanlar'}}>
      <Stack.Screen
        name="Venue"
        component={VenueScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="VenueDetail" component={VenueDetailScreen} />
    </Stack.Navigator>
  );
};

export default VenueStackNavigator;
