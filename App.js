import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigators/TabNavigator';

import {Provider as AuthProvider} from './src/context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
