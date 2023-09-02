import React from 'react';
import ActivityStackNavigator from './ActivityNavigator';
import VenueStackNavigator from './VenueNavigator';
import AuthStackNavigator from './AuthNavigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Activities"
        options={{
          title: 'Etkinlikler',

          tabBarIcon: () => (
            <Icon name="calendar-search" size={25} color="#00B9E8" />
          ),
          tabBarActiveTintColor: '#00B9E8',
        }}
        component={ActivityStackNavigator}
      />
      <Tab.Screen
        name="Venues"
        component={VenueStackNavigator}
        options={{
          title: 'Mekanlar',
          tabBarIcon: () => (
            <Icon name="home-group" size={25} color="#00B9E8" />
          ),
          tabBarActiveTintColor: '#00B9E8',
        }}
      />
      <Tab.Screen
        name="AccountInfo"
        component={AuthStackNavigator}
        options={{
          title: 'Hesabım',
          tabBarIcon: () => <Icon name="account" size={25} color="#00B9E8" />,
          tabBarActiveTintColor: '#00B9E8',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
