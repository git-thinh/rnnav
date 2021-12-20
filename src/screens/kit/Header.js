import React, { useState } from "react"
import {
    HStack, Flex, Box, Center, Divider, Text, Modal, FormControl, Button, Input,
    createIcon, Icon,
    CloseIcon, CheckIcon, HamburgerIcon, SearchIcon,
    QuestionOutlineIcon, MoonIcon, SunIcon,
    ArrowBackIcon, ArrowForwardIcon,
    ChevronLeftIcon, ChevronRightIcon
} from "native-base"
import { Path, G } from "react-native-svg";

const styles = {
    top: {
        marginBottom: "auto",
        marginTop: 0,
    },
    bottom: {
        marginBottom: 0,
        marginTop: "auto",
    },
    left: {
        marginLeft: 0,
        marginRight: "auto",
    },
    right: {
        marginLeft: "auto",
        marginRight: 0,
    },
    center: {},
};

export default function Header() {
    const _bgHeader = 'gray.900';
    const _colorText = 'gray.100';
    const _colorIcon = 'emerald.500';
    let _title = 'Title';

    const CartIcon = () => {
        return (
            <Icon viewBox="0 0 16 16" size="4" color={_colorIcon}>
                <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
                    <Path fill="currentColor" d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </G>
            </Icon>
        )
    };
    const UserIcon = () => {
        return (
            <Icon viewBox="0 0 16 16" size="4" color={_colorIcon}>
                <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
                    <Path fill="currentColor" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </G>
            </Icon>
        )
    };
    const QRCodeIcon = () => {
        return (
            <Icon viewBox="0 0 16 16" size="4" color={_colorIcon}>
                <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
                    <Path fill="currentColor" d="M2 2h2v2H2V2Z" />
                    <Path fill="currentColor" d="M6 0v6H0V0h6ZM5 1H1v4h4V1ZM4 12H2v2h2v-2Z" />
                    <Path fill="currentColor" d="M6 10v6H0v-6h6Zm-5 1v4h4v-4H1Zm11-9h2v2h-2V2Z" />
                    <Path fill="currentColor" d="M10 0v6h6V0h-6Zm5 1v4h-4V1h4ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Z" />
                    <Path fill="currentColor" d="M7 12h1v3h4v1H7v-4Zm9 2v2h-3v-1h2v-1h1Z" />
                </G>
            </Icon>
        )
    };

    const [placement, setPlacement] = useState(undefined)
    const [open, setOpen] = useState(false)

    const openModal = (placement) => {
        setOpen(true)
        setPlacement(placement)
    }

    return (
        <>
            <Box safeAreaTop bg={_bgHeader} width='100%' height='32px'>
                <Flex mt="0" direction="row" justifyContent="space-between">
                    <Flex direction="row" justifyContent="space-between" mt="1">
                        <Center size="6" bg={_bgHeader} mx="1">
                            <HamburgerIcon size="5" color={_colorIcon} />
                        </Center>
                        <Center size="6" bg={_bgHeader} mx="1">
                            <CartIcon />
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
                        <Button onPress={() => openModal("left")}>Left</Button>
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
                            <UserIcon />
                        </Center>
                        <Center size="6" bg={_bgHeader} mr="1">
                            <QRCodeIcon />
                        </Center>
                    </Flex>
                </Flex>
                <Divider mt="0.5" bg="gray.100" height="0.5px" />
            </Box>
            <Modal isOpen={open} onClose={() => setOpen(false)} mt={12}>
                <Modal.Content maxWidth="350" {...styles[placement]}>
                    <Modal.CloseButton />
                    <Modal.Header>Contact Us</Modal.Header>
                    <Modal.Body>
                        <FormControl>
                            <FormControl.Label>Name</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl mt="3">
                            <FormControl.Label>Email</FormControl.Label>
                            <Input />
                        </FormControl>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button
                                variant="ghost"
                                colorScheme="blueGray"
                                onPress={() => {
                                    setOpen(false)
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                onPress={() => {
                                    setOpen(false)
                                }}
                            >
                                Save
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </>
    )
}
