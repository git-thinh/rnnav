import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const HomeScreen = ({ navigation, route }) => {
  //const navigation = useNavigation();
  //const route = useRoute();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='Go Detail' onPress={() => { navigation.push('Detail', { paramA: 'From Main!' }) }} />
      <Button title='Go Welcome' onPress={() => { navigation.push('Welcome', { paramA: 'From Main!' }) }} />
    </View>
  );
};

export default HomeScreen;