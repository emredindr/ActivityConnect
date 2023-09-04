import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ActivityDetailScreen from '../screens/ActivityDetail/ActivityDetailScreen';
import ActivityScreen from '../screens/Activity/ActivityScreen';
import VenueActivityScreen from '../screens/VenueActivity/VenueActivityScreen';
import ActivityTicketScreen from '../screens/ActivityTicket/ActivityTicket';

const Stack = createNativeStackNavigator();

const ActivityStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Activity">
      <Stack.Screen
        name="Activity"
        component={ActivityScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="ActivityDetail" component={ActivityDetailScreen} />
      <Stack.Screen name="VenueActivity" component={VenueActivityScreen} />

      <Stack.Screen name="ActivityTicket" component={ActivityTicketScreen} />
    </Stack.Navigator>
  );
};

export default ActivityStackNavigator;
