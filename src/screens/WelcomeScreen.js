import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome Screen: {route.params.paramA}</Text>
      <Button title='Go Home' onPress={() => { navigation.push('Home', { paramA: 'Hello!' }) }} />
    </View>
  );
};

export default WelcomeScreen;