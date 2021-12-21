import React, { useState, useEffect } from 'react';
import { Dimensions, View, useWindowDimensions, Text } from 'react-native';
import { Box, Button, Heading, Center, Divider } from 'native-base';
import { EventRegister } from '../libs/EventRegister';

import Login from './modules/Login';
import SegmentedControlTab from '../kit/ButtonGroup/SegmentedControlTab';

const UserInfo = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);


    const _title = 'UserInfo';

    const _screenHeight = Dimensions.get('window').height;
    const _screenWidth = Dimensions.get('window').width;
    //console.log(_screenWidth, _screenHeight);

    handleIndexChange = index => {
        setSelectedIndex(index);
    };

    return (<>
        <Box {...props} flex='1' width={_screenWidth} height={_screenHeight}
            py={1} px={3} justifyContent='flex-start'
            position='absolute' zIndex={1} bg='#FFFFFF'>
            <Center mt={3}>
                <SegmentedControlTab
                    values={["Login", "Sign Up", "Third"]}
                    selectedIndex={selectedIndex}
                    onTabPress={handleIndexChange}
                />
            </Center>
            <Divider my={5} color='gray.900' />
            {selectedIndex == 0 && <Login />}
        </Box>
    </>);
};

export default UserInfo;
