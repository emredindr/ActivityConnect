import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FavoriteScreen from '../screens/Favorite/FavoriteScreen';

const Stack = createNativeStackNavigator();

const FavoriteStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Favorilerim',
        }}
      />
    </Stack.Navigator>
  );
};

export default FavoriteStackNavigator;
