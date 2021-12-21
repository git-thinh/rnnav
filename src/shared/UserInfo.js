import React, { useState, useEffect } from 'react';
import { Dimensions, View, useWindowDimensions, Text } from 'react-native';
import { Box, Button, Heading, Center, Divider } from 'native-base';
import { EventRegister } from '../libs/EventRegister';

import SegmentedControlTab from '../kit/ButtonGroup/SegmentedControlTab';
import Login from './modules/Login';
import SignUp from './modules/SignUp';
import Account from './modules/Account';

const UserInfo = (props) => {
    const [_user, _setUser] = useState(null);
    const [_tabs, _setTabs] = useState(['Login', 'Sign Up', 'Close']);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const _loginSuccess = (user) => {
        _setUser(user);
        _setTabs(['Account', 'Change Password', 'Contacts', 'Close']);
    };

    const _signupSuccess = (user) => {
        _setUser(user);
        _setTabs(['Account', 'Change Password', 'Contacts', 'Close']);
    };

    const _title = 'UserInfo';

    const _screenHeight = Dimensions.get('window').height;
    const _screenWidth = Dimensions.get('window').width;
    //console.log(_screenWidth, _screenHeight);

    handleIndexChange = index => {
        setSelectedIndex(index);

        //Close Button
        if(index == _tabs.length - 1){
            EventRegister.send('USER_CLOSE');
        }
    };

    const _logined = _tabs.length == 4;
    return (<>
        <Box {...props} flex='1' width={_screenWidth} height={_screenHeight}
            py={1} px={3} justifyContent='flex-start'
            position='absolute' zIndex={1} bg='#FFFFFF'>
            <Center mt={3}>
                <SegmentedControlTab
                    values={_tabs}
                    selectedIndex={selectedIndex}
                    onTabPress={handleIndexChange}
                />
            </Center>
            <Divider my={5} color='gray.900' />
            {!_logined && selectedIndex == 0 && <Login _loginSuccess={_loginSuccess} />}
            {!_logined && selectedIndex == 1 && <SignUp _signupSuccess={_signupSuccess} />}
            {_logined && selectedIndex == 0 && <Account />}
        </Box>
    </>);
};

export default UserInfo;
