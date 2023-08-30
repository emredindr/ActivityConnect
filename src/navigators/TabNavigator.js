import React from 'react';
import ActivityStackNavigator from './ActivityNavigator';
import VenueStackNavigator from './VenueNavigator';
import AuthStackNavigator from './AuthNavigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Activities"
        options={{title: 'Etkinlikler'}}
        component={ActivityStackNavigator}
      />
      <Tab.Screen
        name="Venues"
        component={VenueStackNavigator}
        options={{title: 'Mekanlar'}}
      />
      <Tab.Screen
        name="AccountInfo"
        component={AuthStackNavigator}
        options={{title: 'Hesabım'}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
