import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountScreen from '../screens/Account/AccountScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  const isAuthenticated = true;

  return (
    <>
      {isAuthenticated ? (
        <Stack.Navigator initialRouteName="Account">
          <Stack.Screen
            name="Account"
            component={AccountScreen}
            options={{
              headerTitleAlign: 'center',
              headerTitle: 'Hesabım',
              headerRight: () => <Icon name="logout" size={30} style={{color:'red'}}></Icon>,
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerTitleAlign: 'center'}}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{headerTitleAlign: 'center'}}
          />
        </Stack.Navigator>
      )}
    </>
  );
};

export default AuthNavigator;
