import React from 'react'
import { FlatList, StyleSheet,  } from 'react-native'
import {
  VStack,
  HStack,
  Text,
  CheckIcon,
  Box,Divider,
  Center,NativeBaseProvider
} from "native-base"

const items = [
  { id: '0', text: 'View' },
  { id: '1', text: 'Text' },
  { id: '2', text: 'Image' },
  { id: '3', text: 'ScrollView' },
  { id: '4', text: 'ListView' },
]

function Listv3() {
  return (
    <VStack space={3} divider={<Divider />} w="90%" bg='light.50'>
      <HStack justifyContent="space-between">
        <Text>Simon Mignolet</Text>
        <CheckIcon />
      </HStack>
      <HStack justifyContent="space-between">
        <Text>Nathaniel Clyne</Text>
        <CheckIcon />
      </HStack>
      <HStack justifyContent="space-between">
        <Text>Dejan Lovren</Text>
        <CheckIcon />
      </HStack>
    </VStack>
  )
}

function ListScreen() {
  return (
    <FlatList
      style={styles.container}
      data={items}
      renderItem={({ item }) => <Text style={styles.row}>{item.text}</Text>}
      keyExtractor={(item) => item.id}
    />
  )
}

export default function () {
  return (
      <NativeBaseProvider>
          <Center flex={1} px="2" bg='light.500'>
              <Listv3 />
          </Center>
          <Center flex={1} p="2">
              <ListScreen />
          </Center>
      </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
})