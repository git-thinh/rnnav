import React from "react";
import { Dimensions } from 'react-native';
import { Box, Button, Heading, Center, Divider } from 'native-base';
import { EventRegister } from '../libs/EventRegister';

const ItemBox = (props) => {
    const _title = 'ItemBox';

    const _screenHeight = Dimensions.get('window').height;
    const _screenWidth = Dimensions.get('window').width;
    //console.log(_screenWidth, _screenHeight);

    return (<>
        <Box {...props} flex='1' width={_screenWidth} height={_screenHeight} position='absolute' zIndex={1}>
            <Box width={_screenWidth} height={_screenHeight} bg='coolGray.100'
                position='absolute' zIndex={0} opacity={0.4}></Box>
            <Box width={_screenWidth} height={_screenHeight}
                position='absolute' zIndex={1} 
                flex={1} alignItems='center' justifyContent='center'>
                <Center bg='coolGray.100' p={5}>
                    <Heading>{_title}</Heading>
                    <Button onPress={() => {
                        EventRegister.emit('EVENT_APP', { code: 'ITEM_CLOSE' });
                    }}>Close</Button>
                </Center>
            </Box>
        </Box>
    </>);
};

export default ItemBox;
