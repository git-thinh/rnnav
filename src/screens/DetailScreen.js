import * as React from 'react';
import { View, Text, Button } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

const DetailScreen = ({ navigation, route }) => {
  //const navigation = useNavigation();
  //const route = useRoute();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen: {route.params.paramA}</Text>
      <Button title='Go Home' onPress={() => { navigation.push('Home', { paramA: 'From Detail!' }) }} />
      <Button title='Go Welcome' onPress={() => { navigation.push('Welcome', { paramA: 'From Detail!' }) }} />
    </View>
  );
};

export default DetailScreen;