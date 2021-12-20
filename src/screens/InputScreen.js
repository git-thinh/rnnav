import React from "react"
import { useColorMode, Text, Button, CheckIcon, Input, Stack, Center, Heading, NativeBaseProvider, InputGroup, InputLeftAddon, InputRightAddon } from "native-base"
import { ScrollView } from 'react-native'

export default InputScreen = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <ScrollView>
            <Center flex={1} px="3" bg={colorMode === 'dark' ? 'coolGray.800' : 'white'}>
                <Center flex={1} bg={colorMode === 'dark' ? 'coolGray.800' : 'warmGray.50'}>
                    <Text fontSize="lg" display="flex" mb="20">
                        The active color mode is{' '}
                        <Text bold fontSize="lg">
                            {colorMode}
                        </Text>
                    </Text>
                    <Button onPress={toggleColorMode}>Toggle</Button>
                </Center>
                <Stack space={4} w={{ base: "75%", md: "25%", }}>
                    <Center>
                        <Heading textAlign="center" mb="10">
                            Input Variants
                        </Heading>
                    </Center>
                    <Input variant="outline" placeholder="Outline" />
                    <Input variant="filled" placeholder="Filled" />
                    <Input variant="underlined" placeholder="Underlined" />
                    <Input variant="unstyled" placeholder="Unstyled" />
                    <Input variant="rounded" placeholder="Round" />

                    <InputGroup w={{ base: "70%", md: "285", }} >
                        <InputLeftAddon children={"https://"} />
                        <Input w={{ base: "70%", md: "100%", }} placeholder="nativebase" />
                        <InputRightAddon children={".io"} />
                    </InputGroup>
                </Stack>
                <Stack space={4} w="100%" alignItems="center" mt='3'>
                    <Input w={{ base: "75%", md: "25%", }}
                        InputLeftElement={<CheckIcon size={5} ml="2" color="muted.400" />}
                        placeholder="Name"
                    />
                    <Input w={{ base: "75%", md: "25%", }}
                        InputRightElement={
                            <CheckIcon size={5} mr="2" color="muted.400" />
                        }
                        placeholder="Password"
                    />
                    <Input
                        type={show ? "text" : "password"}
                        w={{
                            base: "75%",
                            md: "25%",
                        }}
                        InputRightElement={
                            <Button size="xs" rounded="none" w="1/6" h="full" onPress={handleClick}>
                                {show ? "Hide" : "Show"}
                            </Button>
                        }
                        placeholder="Password"
                    />
                </Stack>
            </Center>
        </ScrollView>
    )
};
