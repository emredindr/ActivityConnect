import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigators/TabNavigator';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {Provider as FavoriteProvider} from './src/context/FavoriteContext';

function App() {
  return (
    <AuthProvider>
      <FavoriteProvider>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </FavoriteProvider>
    </AuthProvider>
  );
}

export default App;
