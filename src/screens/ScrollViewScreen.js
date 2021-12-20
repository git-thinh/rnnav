
import React from 'react'
import { ScrollView, StyleSheet, View, Button } from 'react-native'

import Header from './kit/Header';
import { EventRegister } from '../EventRegister'

export default function ScrollViewScreen({ navigation, route }) {

  // React.useEffect(() => {
  //   if (route.params?.eventApp) {
  //     // Post updated, do something with `route.params.post`
  //     // For example, send the post to the server
  //   }
  // }, [route.params?.eventApp]);

  return (
    <>
      <Header></Header>
      <ScrollView style={styles.container}>
        <View style={styles.large} />
        <ScrollView horizontal>
          <Button title='_openMenuBar' onPress={() => {
            EventRegister.emit('myCustomEvent', 'it works!!!');
          }}></Button>
          <View style={styles.small} />
          <View style={styles.small} />
          <View style={styles.small} />
        </ScrollView>
        <View style={styles.large} />
        <View style={styles.small} />
        <View style={styles.large} />
      </ScrollView>
    </>
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