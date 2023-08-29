import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ActivityDetailScreen from '../screens/ActivityDetail/ActivityDetailScreen';
import ActivityScreen from '../screens/Activity/ActivityScreen';

const Stack = createNativeStackNavigator();

const ActivityStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Activity' screenOptions={{title:'Etkinlikler',headerTitleAlign:'center'}}>
        <Stack.Screen name="Activity" component={ActivityScreen} />
        <Stack.Screen name="ActivityDetail" component={ActivityDetailScreen} options={{headerTitle:'Etkinlik Detayları'}} />
    </Stack.Navigator>
  );
};

export default ActivityStackNavigator;
