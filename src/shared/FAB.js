import React from "react"
import { Box, useDisclose, IconButton, Stagger, HStack, CheckIcon } from "native-base";

const FAB = () => {
    const { isOpen, onToggle } = useDisclose()
    return (
        <Box position='absolute' zIndex={99999} right={0} bottom={0}>
            <Box alignItems="center" minH={isOpen ? '220' : '0'} bg='amber.100' width='50px'>
                <Stagger
                    visible={isOpen}
                    initial={{
                        opacity: 0,
                        scale: 0,
                        translateY: 34,
                    }}
                    animate={{
                        translateY: 0,
                        scale: 1,
                        opacity: 1,
                        transition: {
                            type: "spring",
                            mass: 0.8,
                            stagger: {
                                offset: 30,
                                reverse: true,
                            },
                        },
                    }}
                    exit={{
                        translateY: 34,
                        scale: 0.5,
                        opacity: 0,
                        transition: {
                            duration: 100,
                            stagger: {
                                offset: 30,
                                reverse: true,
                            },
                        },
                    }}
                >
                    <IconButton
                        mb="4"
                        variant="solid"
                        bg="indigo.500"
                        colorScheme="indigo"
                        borderRadius="full"
                        icon={
                            <CheckIcon
                                size="6"
                                _dark={{
                                    color: "warmGray.50",
                                }}
                                color="warmGray.50"
                            />
                        }
                    />
                    <IconButton
                        mb="4"
                        variant="solid"
                        bg="yellow.400"
                        colorScheme="yellow"
                        borderRadius="full"
                        icon={
                            <CheckIcon
                                _dark={{
                                    color: "warmGray.50",
                                }}
                                size="6"
                                color="warmGray.50"
                            />
                        }
                    />
                    <IconButton
                        mb="4"
                        variant="solid"
                        bg="teal.400"
                        colorScheme="teal"
                        borderRadius="full"
                        icon={
                            <CheckIcon
                                _dark={{
                                    color: "warmGray.50",
                                }}
                                size="6"
                                color="warmGray.50"
                            />
                        }
                    />
                    <IconButton
                        mb="4"
                        variant="solid"
                        bg="red.500"
                        colorScheme="red"
                        borderRadius="full"
                        icon={
                            <CheckIcon
                                size="6"
                                _dark={{
                                    color: "warmGray.50",
                                }}
                                color="warmGray.50"
                            />
                        }
                    />
                </Stagger>
            </Box>
            <HStack alignItems="center">
                <IconButton
                    variant="solid"
                    borderRadius="full"
                    size="lg"
                    onPress={onToggle}
                    bg="cyan.400"
                    icon={
                        <CheckIcon
                            size="6"
                            color="warmGray.50"
                            _dark={{
                                color: "warmGray.50",
                            }}
                        />
                    }
                />
            </HStack>
        </Box>
    )
}

export default FAB;
