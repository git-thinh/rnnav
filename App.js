import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { useColorMode, NativeBaseProvider, extendTheme} from "native-base"

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


import LoginScreen from './src/screens/LoginScreen';
import InputScreen from './src/screens/InputScreen';
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


function App() {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: '#E3F2F9',
        100: '#C5E4F3',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#0088CC',
        600: '#007AB8',
        700: '#006BA1',
        800: '#005885',
        900: '#003F5E',
      },
      // Redefinig only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },
    config: {
      // Changing initialColorMode to 'dark' light 
      initialColorMode: 'light'
    },
  });


  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        {/* <Stack.Screen name="Home"> {props => <HomeScreen {...props} extraData={{ someData: 12345 }} />} </Stack.Screen> */}
        <Stack.Navigator initialRouteName="ScrollViewScreen" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="InputScreen" component={InputScreen}/>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Welcome' }} />
          <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detail' }} />
          <Stack.Screen name="ListGroup" component={ListGroupScreen} options={{ title: 'ListGroupScreen' }} />
          <Stack.Screen name="List" component={ListScreen} options={{ title: 'ListScreen' }} />
          <Stack.Screen name="TouchableOpacity" component={TouchableOpacityScreen} options={{ title: 'TouchableOpacityScreen' }} />
          <Stack.Screen name="TouchableHighlight" component={TouchableHighlightScreen} options={{ title: 'TouchableHighlightScreen' }} />
          <Stack.Screen name="ScrollViewScreen" component={ScrollViewScreen} options={{ title: 'ScrollViewScreen' }} />
          <Stack.Screen name="View" component={ViewScreen} options={{ title: 'ViewScreen' }} />
          <Stack.Screen name="Ajax" component={AjaxScreen} options={{ title: 'AjaxScreen' }} />
          <Stack.Screen name="DrapDrop" component={DrapDropScreen} options={{ title: 'DrapDropScreen' }} />
          <Stack.Screen name="Photo" component={PhotoScreen} options={{ title: 'PhotoScreen' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;