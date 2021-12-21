import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, extendTheme } from "native-base";
import { EventRegister } from './src/libs/EventRegister';

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

import MenuBar from './src/shared/MenuBar';
import Ads from './src/shared/Ads';
import Loading from './src/shared/Loading';
import ShopCart from './src/shared/ShopCart';

function App() {
  const [adsVisible, setAdsVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(true);

  // Tương tự như componentDidMount và componentDidUpdate:
  useEffect(() => {
    EventRegister.addEventListener('EVENT_APP', _onPopupOpen);
  });

  const _onPopupOpen = (data) => {
    console.log('EVENT_APP = ', data);
    if (data && data.code) {
      switch (data.code) {
        case 'LOADING_OPEN': return setLoadingVisible(true);
        case 'LOADING_CLOSE': return setLoadingVisible(false);
        case 'ADS_OPEN': return setAdsVisible(true);
        case 'ADS_CLOSE': return setAdsVisible(false);

        case 'MENU_OPEN':
          setCartVisible(false);
          return setMenuVisible(true);
        case 'MENU_CLOSE':
          return setMenuVisible(false);
        case 'CART_OPEN':
          setMenuVisible(false);
          return setCartVisible(true);
        case 'CART_CLOSE':
          return setCartVisible(false);

        case 'PROFILE_OPEN':
          break;
        case 'NOTIFY_OPEN':
          break;
        case 'CHAT_OPEN':
          break;
      }
    }
  };


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
      {adsVisible && <Ads />}
      {loadingVisible && <Loading />}
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
      {menuVisible && <MenuBar />}
      {cartVisible && <ShopCart />}
    </NativeBaseProvider>
  );
}

export default App;