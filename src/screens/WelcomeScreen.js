import * as React from 'react';
import { View, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Avatar, VStack, Text, Image, useToast, Heading, Center,  } from 'native-base';

const WelcomeScreen = () => {
  const toast = useToast();
  const navigation = useNavigation();
  const route = useRoute();
  const uri = 'https://facebook.github.io/react-native/docs/assets/favicon.png';
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Center>
        <Image
          source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg",
          }}
          alt="Alternate Text"
          size="xl"
        />
      </Center>
      <Heading size='xl'>Header One</Heading>
      <Heading size='lg'>Header Two</Heading>
      <Heading size='md'>Header Three</Heading>
      <Text>Default</Text>
      <Text>Welcome Screen</Text>
      <Button title='Toast'
        onPress={() => {
          toast.show({
            title: 'Wrong password',
            placement: 'bottom',
            status: 'warning',
          });
        }}
      >
      </Button>
      <Button title='Go Home' onPress={() => { navigation.push('Home', { paramA: 'Hello!' }) }} />

      <VStack space="2" alignItems="center">
        <Text>Square Thumbnail</Text>
        <Image size="12" source={{ uri: uri }} alt="react-native" />
        <Image size="16" source={{ uri: uri }} alt="react-native" />
        <Image size="20" source={{ uri: uri }} alt="react-native" />
        <Text>Circular Thumbnail</Text>
        <Avatar size="xs" source={{ uri: uri }} />
        <Avatar size="md" source={{ uri: uri }} />
        <Avatar size="lg" source={{ uri: uri }} />
      </VStack>

    </View>
  );
};

export default WelcomeScreen;