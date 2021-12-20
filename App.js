import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import ListGroupScreen from './src/screens/ListGroupScreen';
import ListScreen from './src/screens/ListScreen';
import TouchableOpacityScreen from './src/screens/TouchableOpacityScreen';
import TouchableHighlightScreen from './src/screens/TouchableHighlightScreen';
import ScrollViewScreen from './src/screens/ScrollViewScreen';
import ViewScreen from './src/screens/ViewScreen';
import AjaxScreen from './src/screens/AjaxScreen';
import DrapDropScreen from './src/screens/DrapDropScreen';
import PhotoScreen from './src/screens/PhotoScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Photo">
        {/* <Stack.Screen name="Home">
          {props => <HomeScreen {...props} extraData={{ someData: 12345 }} />}
        </Stack.Screen> */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detail' }} />
        <Stack.Screen name="ListGroup" component={ListGroupScreen} options={{ title: 'ListGroupScreen' }} />
        <Stack.Screen name="List" component={ListScreen} options={{ title: 'ListScreen' }} />
        <Stack.Screen name="TouchableOpacity" component={TouchableOpacityScreen} options={{ title: 'TouchableOpacityScreen' }} />
        <Stack.Screen name="TouchableHighlight" component={TouchableHighlightScreen} options={{ title: 'TouchableHighlightScreen' }} />
        <Stack.Screen name="ScrollView" component={ScrollViewScreen} options={{ title: 'ScrollViewScreen' }} />
        <Stack.Screen name="View" component={ViewScreen} options={{ title: 'ViewScreen' }} />
        <Stack.Screen name="Ajax" component={AjaxScreen} options={{ title: 'AjaxScreen' }} />
        <Stack.Screen name="DrapDrop" component={DrapDropScreen} options={{ title: 'DrapDropScreen' }} />
        <Stack.Screen name="Photo" component={PhotoScreen} options={{ title: 'PhotoScreen' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;