import React from "react";
import { Dimensions } from 'react-native';
import { Box, Button, Heading, Center, Divider, FlatList, Avatar } from 'native-base';
import { EventRegister } from '../libs/EventRegister';

const ChatBox = (props) => {
    const _title = 'ChatBox';

    const _screenHeight = Dimensions.get('window').height;
    const _screenWidth = Dimensions.get('window').width;
    //console.log(_screenWidth, _screenHeight);

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

    const AvatarGroup = () => {
        return (
            <Avatar.Group size="lg" max={3}>
                <Avatar key={0} bg="green.500" source={{ uri: "http://iot.vn/avatar/5.jpg", }}>
                    SS
                </Avatar>
                <Avatar key={1}
                    bg="lightBlue.500"
                    source={{
                        uri: "http://iot.vn/avatar/0.jpg",
                    }}
                >
                    AK
                </Avatar>
                <Avatar key={2}
                    bg="indigo.500"
                    source={{
                        uri: "http://iot.vn/avatar/1.jpg",
                    }}
                >
                    RS
                </Avatar>
                <Avatar key={3}
                    bg="amber.600"
                    source={{
                        uri: "http://iot.vn/avatar/2.jpg",
                    }}
                >
                    MR
                </Avatar>
                <Avatar key={4}
                    bg="emerald.600"
                    source={{
                        uri: "http://iot.vn/avatar/3.jpg",
                    }}
                >
                    CB
                </Avatar>
                <Avatar key={5}
                    bg="blue.600"
                    source={{
                        uri: "http://iot.vn/avatar/4.jpg",
                    }}
                >
                    GG
                </Avatar>
                <Avatar key={6}
                    bg="black.600"
                    source={{
                        uri: "http://iot.vn/avatar/5.jpg",
                    }}
                >
                    RS
                </Avatar>
                <Avatar key={7}
                    bg="blueGray.600"
                    source={{
                        uri: "http://iot.vn/avatar/0.jpg",
                    }}
                >
                    MR
                </Avatar>
            </Avatar.Group>
        )
    }

    return (<>
        <Box {...props} flex='1' width={_screenWidth} height={_screenHeight} position='absolute' zIndex={1} bg="light.50">
            <Center bg='coolGray.100' p={5}>
                <Heading>{_title}</Heading>
                <Button onPress={() => {
                    EventRegister.emit('EVENT_APP', { code: 'CHAT_CLOSE' });
                }}>Close</Button>
            </Center>
            <Divider my={2} />
            <Center>
                <AvatarGroup />
            </Center>
            <Divider my={2} />
            <Center>
                <FlatList numColumns={4}
                    data={data}
                    renderItem={({ item, index }) => {
                        return (

                            <Avatar key={item.id} size="48px" alignSelf="center"
                                size="lg" bg="cyan.500" m={2}
                                source={{ uri: item.avatarUrl }}>
                                <Avatar.Badge bg="green.500" />
                            </Avatar>
                        )
                    }} />
            </Center>
        </Box>
    </>);
};

export default ChatBox;
