import React, { useState } from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';

import {
    NativeBaseProvider,
    Box,
    Text,
    Pressable,
    Heading,
    IconButton,
    Center,
    Button,
    CheckIcon,
    SearchIcon,
    HStack,
    Avatar,
    VStack,
    Spacer,
    Divider,
    Input
} from 'native-base';

import { EventRegister } from '../libs/EventRegister';
import { SwipeListView } from 'react-native-swipe-list-view';

import UserIcon from '../icons/UserIcon';

const Contact = (props) => {

    function SearchBar() {
        return (
            <VStack
                space={5}
                width="100%"
                divider={
                    <Box px="2">
                        <Divider />
                    </Box>
                }>
                <VStack width="100%" space={5} alignItems="center">
                    <Heading fontSize="lg">Cupertino</Heading>
                    <Input
                        placeholder="Search"
                        variant="filled"
                        width="100%"
                        bg="muted.200"
                        borderRadius="10"
                        py="1"
                        px="2"
                        placeholderTextColor="gray.500"
                        borderWidth="0"
                        InputLeftElement={
                            <SearchIcon
                                ml="2"
                                size="5"
                                color="gray.500"
                            />
                        }
                    />
                </VStack>

                <VStack width="100%" space={5} alignItems="center">
                    <Heading fontSize="lg">Material</Heading>
                    <Input
                        placeholder="Search People - Places"
                        bg="transparent"
                        width="100%"
                        borderRadius="4"
                        py="3"
                        px="1"
                        fontSize="14"
                        InputLeftElement={
                            <SearchIcon
                                m="2"
                                ml="3"
                                size="6"
                                color="gray.400"
                            />
                        }
                        InputRightElement={
                            <SearchIcon
                                m="2"
                                mr="3"
                                size="6"
                                color="gray.400"
                            />
                        }
                    />
                </VStack>
            </VStack>
        );
    }

    const data = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            fullName: 'Afreen Khan',
            timeStamp: '12:47 PM',
            recentText: 'Good Day!',
            avatarUrl: 'http://iot.vn/avatar/0.jpg'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            fullName: 'Sujita Mathur',
            timeStamp: '11:11 PM',
            recentText: 'Cheer up, there!',
            avatarUrl: 'http://iot.vn/avatar/1.jpg'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            fullName: 'Anci Barroco',
            timeStamp: '6:22 PM',
            recentText: 'Good Day!',
            avatarUrl: 'http://iot.vn/avatar/2.jpg'
        },
        {
            id: '68694a0f-3da1-431f-bd56-142371e29d72',
            fullName: 'Aniket Kumar',
            timeStamp: '8:56 PM',
            recentText: 'All the best',
            avatarUrl: 'http://iot.vn/avatar/3.jpg'
        },
        {
            id: '28694a0f-3da1-471f-bd96-142456e29d72',
            fullName: 'Kiara',
            timeStamp: '12:47 PM',
            recentText: 'I will call today.',
            avatarUrl: 'http://iot.vn/avatar/4.jpg'
        },
    ];

    const [listData, setListData] = useState(data);

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex((item) => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    };

    const onRowDidOpen = (rowKey) => {
        console.log('This row opened', rowKey);
    };

    const renderItem = ({ item, index }) => (
        <Box>
            <Pressable onPress={() => console.log('You touched me')} bg="white">
                <Box
                    pl="4"
                    pr="5"
                    py="2"
                >
                    <HStack alignItems="center" space={3}>
                        <Avatar size="48px" source={{ uri: item.avatarUrl }} />
                        <VStack>
                            <Text color="coolGray.800" _dark={{ color: 'warmGray.50' }} bold>
                                {item.fullName}
                            </Text>
                            <Text color="coolGray.600" _dark={{ color: 'warmGray.200' }}>{item.recentText}</Text>
                        </VStack>
                        <Spacer />
                        <Text fontSize="xs" color="coolGray.800" _dark={{ color: 'warmGray.50' }} alignSelf="flex-start">
                            {item.timeStamp}
                        </Text>
                    </HStack>
                </Box>
            </Pressable>
        </Box>
    );

    const renderHiddenItem = (data, rowMap) => (
        <HStack flex="1" pl="2">
            <Pressable
                w="70"
                ml="auto"
                cursor="pointer"
                bg="coolGray.200"
                justifyContent="center"
                onPress={() => closeRow(rowMap, data.item.key)}
                _pressed={{
                    opacity: 0.5,
                }}>
                <VStack alignItems="center" space={2}>
                    <CheckIcon size="xs" color="coolGray.800" />
                    <Text fontSize="xs" fontWeight="medium" color="coolGray.800">
                        More
                    </Text>
                </VStack>
            </Pressable>
            <Pressable
                w="70"
                cursor="pointer"
                bg="red.500"
                justifyContent="center"
                onPress={() => deleteRow(rowMap, data.item.key)}
                _pressed={{
                    opacity: 0.5,
                }}>
                <VStack alignItems="center" space={2}>
                    <CheckIcon color="white" size="xs" />
                    <Text color="white" fontSize="xs" fontWeight="medium">
                        Delete
                    </Text>
                </VStack>
            </Pressable>
        </HStack>
    );



    const _title = 'Contact';

    const _screenHeight = Dimensions.get('window').height;
    const _screenWidth = Dimensions.get('window').width;
    //console.log(_screenWidth, _screenHeight);

    return (
        <Box {...props} flex='1' width={_screenWidth} height={_screenHeight} position='absolute' zIndex={1} bg='light.50'>
            <Heading>{_title}</Heading>
            <Button m={5} onPress={() => { EventRegister.send('CONTACT_CLOSE'); }}>Close</Button>
            <Center p="2">
                {/* <SearchBar /> */}
                <Input placeholder="Search"
                        variant="filled"
                        width="100%"
                        bg="muted.200"
                        borderRadius="10"
                        py="1"
                        px="2"
                        placeholderTextColor="gray.500"
                        borderWidth="0"
                        InputLeftElement={<SearchIcon ml="2" size="3" color="gray.500"/>}
                    />
            </Center>
            <SwipeListView
                data={listData}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                rightOpenValue={-130}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onRowDidOpen={onRowDidOpen}
            />

            {/* <Box width={_screenWidth} height={_screenHeight} bg='coolGray.100'
                    position='absolute' zIndex={0} opacity={0.4}></Box>
                <Box width={_screenWidth} height={_screenHeight}
                    position='absolute' zIndex={1}
                    flex={1} alignItems='center' justifyContent='center'>
                    <Center bg='coolGray.100' p={5}>
                        <Heading>{_title}</Heading>
                        <Button onPress={() => { EventRegister.send('CONTACT_CLOSE'); }}>Close</Button>
                        <Box bg="white" flex="1" safeAreaTop>
                            <Heading p="4" pb="3" size="lg">
                                Inbox
                            </Heading>

                            <Box bg="white" safeArea flex="1">
                               
                            </Box>

                        </Box>
                    </Center>
                </Box> */}
        </Box>
    );
};

export default Contact;
