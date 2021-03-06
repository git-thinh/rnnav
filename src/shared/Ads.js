import React from "react";
import { Dimensions } from 'react-native';
import { Box, Button, Heading, Center, Divider } from 'native-base';
import { EventRegister } from '../libs/EventRegister';

const Ads = (props) => {
    const _title = 'Ads';

    const _screenHeight = Dimensions.get('window').height;
    const _screenWidth = Dimensions.get('window').width;
    //console.log(_screenWidth, _screenHeight);

    return (<>
        <Box {...props} flex='1' width={_screenWidth} height={_screenHeight} position='absolute' zIndex={999999}>
            <Box width={_screenWidth} height={_screenHeight} bg='coolGray.100'
                position='absolute' zIndex={0} opacity={0.4}></Box>
            <Box width={_screenWidth - 100} height={_screenHeight} bg='coolGray.900'
                position='absolute' zIndex={1}>
                <Heading>{_title}</Heading>
                <Divider my="2" />
                <Center>
                    <Button onPress={() => { EventRegister.emit('EVENT_APP', { code: 'ADS_CLOSE' }); }}>Close</Button>
                </Center>
            </Box>
        </Box>
    </>);
};


export default Ads;
