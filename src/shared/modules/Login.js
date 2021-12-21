import * as React from "react"
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
} from "native-base"

import { EventRegister } from '../../libs/EventRegister';

export const Login = () => {
  return (
    <Box safeArea p="1" py="0" w="90%" maxW="290">
      <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50", }} >
        Welcome
      </Heading>
      <Heading mt="1" _dark={{ color: "warmGray.200", }} color="coolGray.600" fontWeight="medium" size="xs">
        Sign in to continue!
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email / Phone</FormControl.Label>
          <Input value="0948003456" />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" value="12345" />
          <Link _text={{ fontSize: "xs", fontWeight: "500", color: "indigo.500", }} alignSelf="flex-end" mt="1" >
            Forget Password?
          </Link>
        </FormControl>
        <Button mt="2" colorScheme="indigo" onPress={() => {
          EventRegister.send({ code: 'USER_LOGIN', data: { username: '0948003456', password: '12345' } });
        }}>
          Sign in
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text fontSize="sm" color="coolGray.600" _dark={{ color: "warmGray.200", }}>
            I'm a new user.{" "}
          </Text>
          <Link _text={{ color: "indigo.500", fontWeight: "medium", fontSize: "sm", }} href="#">
            Sign Up
          </Link>
        </HStack>
      </VStack>
    </Box>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center>
        <Login />
      </Center>
    </NativeBaseProvider>
  )
}
