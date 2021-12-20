import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {
  useColorMode, NativeBaseProvider, extendTheme, useToast,
  Modal, FormControl, Input, Button
} from "native-base"

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { EventRegister } from './src/EventRegister'

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
  const [placement, setPlacement] = useState(undefined)
  const [open, setOpen] = useState(false)

  const openModal = (placement) => {
    setOpen(true)
    setPlacement(placement)
  }
  
  this.listener = EventRegister.addEventListener('myCustomEvent', (data) => {
    console.log('Event: data = ', data);
    openModal("left");
  });

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
          <Stack.Screen name="InputScreen" component={InputScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="ListGroup" component={ListGroupScreen} />
          <Stack.Screen name="List" component={ListScreen} />
          <Stack.Screen name="TouchableOpacity" component={TouchableOpacityScreen} />
          <Stack.Screen name="TouchableHighlight" component={TouchableHighlightScreen} />
          <Stack.Screen name="ScrollViewScreen" component={ScrollViewScreen} initialParams={{ post: 42 }} />
          <Stack.Screen name="View" component={ViewScreen} />
          <Stack.Screen name="Ajax" component={AjaxScreen} />
          <Stack.Screen name="DrapDrop" component={DrapDropScreen} />
          <Stack.Screen name="Photo" component={PhotoScreen} />
        </Stack.Navigator>
      </NavigationContainer>

      <Modal isOpen={open} onClose={() => setOpen(false)} mt={12}>
        <Modal.Content maxWidth="350" {...styles[placement]}>
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setOpen(false)
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setOpen(false)
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </NativeBaseProvider>
  );
}

const styles = {
  top: {
      marginBottom: "auto",
      marginTop: 0,
  },
  bottom: {
      marginBottom: 0,
      marginTop: "auto",
  },
  left: {
      marginLeft: 0,
      marginRight: "auto",
  },
  right: {
      marginLeft: "auto",
      marginRight: 0,
  },
  center: {},
};

export default App;