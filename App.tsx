
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './Pages/HomeScreen';
import { DetailsScreen } from './Pages/DetailsScreen';
import ListPage from './Pages/ListPage';


const Stack = createStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="ListPage" component={ListPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

