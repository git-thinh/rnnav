
import React from 'react'
import { ScrollView, StyleSheet, View, Dimensions } from 'react-native';
import { Box } from 'native-base';

import Header from './shared/Header';
import Footer from './shared/Footer';
import { EventRegister } from '../EventRegister'

export default function ScrollViewScreen({ navigation, route }) {

  const _screenHeight = Dimensions.get('window').height;
  const _screenWidth = Dimensions.get('window').width;

  // React.useEffect(() => {
  //   if (route.params?.eventApp) {
  //     // Post updated, do something with `route.params.post`
  //     // For example, send the post to the server
  //   }
  // }, [route.params?.eventApp]);

  return (
    <Box flex={1}>
      <Header/>
      <ScrollView style={styles.container} height={_screenHeight - 100}>
        <View style={styles.large} />
        <ScrollView horizontal>
          <View style={styles.small} />
          <View style={styles.small} />
          <View style={styles.small} />
        </ScrollView>
        <View style={styles.large} />
        <View style={styles.small} />
        <View style={styles.large} />
      </ScrollView>
      <Footer/>
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  small: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
  large: {
    width: 300,
    height: 300,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'steelblue',
  },
})