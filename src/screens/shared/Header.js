import React from "react";
import { TouchableOpacity } from 'react-native'
import {
    HStack, Flex, Box, Center, Divider, Text, Modal, FormControl, Button, Input,
    createIcon, Icon,
    CloseIcon, CheckIcon, HamburgerIcon, SearchIcon,
    QuestionOutlineIcon, MoonIcon, SunIcon,
    ArrowBackIcon, ArrowForwardIcon,
    ChevronLeftIcon, ChevronRightIcon
} from "native-base"

import MenuBarIcon from '../../icons/MenuBarIcon';
import CartIcon from '../../icons/CartIcon';
import UserIcon from '../../icons/UserIcon';
import QRCodeIcon from '../../icons/QRCodeIcon';

import { EventRegister } from '../../libs/EventRegister'

export default function Header() {
    const _bgHeader = 'gray.900';
    const _colorText = 'gray.100';
    const _colorIcon = 'emerald.500';
    let _title = 'Title';

    return (
        <>
            <Box safeAreaTop bg={_bgHeader} width='100%' height='32px'>
                <Flex mt="0" direction="row" justifyContent="space-between">
                    <Flex direction="row" justifyContent="space-between" mt="1">
                        <Center size="6" bg={_bgHeader} mx="1">
                            <MenuBarIcon size="5" color={_colorIcon} event='MENU_OPEN' />
                        </Center>
                        <Center size="6" bg={_bgHeader} mx="1">
                            <CartIcon size="4" color={_colorIcon} />
                        </Center>
                        <Center size="6" bg={_bgHeader} mx="1">
                            <ArrowBackIcon size="5" color={_colorIcon} />
                        </Center>
                        <Center size="6" bg={_bgHeader} mx="1">
                            <ChevronLeftIcon size="7" color={_colorIcon} />
                        </Center>
                        <Center size="6" bg={_bgHeader} mx="1">
                            <MoonIcon size="4" color={_colorIcon} />
                        </Center>
                        <Center size="6" bg={_bgHeader} mx="1">
                            <SunIcon size="4" color={_colorIcon} />
                        </Center>
                    </Flex>
                    <Center bg={_bgHeader}>
                        <Text color={_colorText}>{_title}</Text>
                    </Center>
                    <Flex direction="row" justifyContent="space-between" mt="1">
                        <Center size="6" bg={_bgHeader} mr="1">
                            <SearchIcon size="4" color={_colorIcon} />
                        </Center>
                        <Center size="6" bg={_bgHeader} mr="1">
                            <CheckIcon size="4" color={_colorIcon} />
                        </Center>
                        <Center size="6" bg={_bgHeader} mr="1">
                            <CloseIcon size="3.5" color={_colorIcon} />
                        </Center>
                        <Center size="6" bg={_bgHeader} mr="1">
                            <QuestionOutlineIcon size="4" color={_colorIcon} />
                        </Center>
                        <Center size="6" bg={_bgHeader} mr="1">
                            <ChevronRightIcon size="7" color={_colorIcon} />
                        </Center>
                        <Center size="6" bg={_bgHeader} mr="1">
                            <ArrowForwardIcon size="5" color={_colorIcon} />
                        </Center>
                        <Center size="6" bg={_bgHeader} mr="1">
                            <QRCodeIcon size="4" color={_colorIcon} press={() => { EventRegister.emit('myCustomEvent', '3.it works!!!'); }} />
                        </Center>
                        <Center size="6" bg={_bgHeader} mr="1">
                            <UserIcon size="5" color={_colorIcon} press={() => { EventRegister.send('USER_OPEN'); }} />
                        </Center>
                    </Flex>
                </Flex>
                <Divider mt="0.5" bg="gray.100" height="0.5px" />
            </Box>
        </>
    )
}
