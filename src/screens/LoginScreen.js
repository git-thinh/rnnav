import React from "react"
import {
    FormControl,
    Input,
    Stack,
    WarningOutlineIcon,
    Box,
    Center
} from "native-base"

export default LoginScreen = () => {
    
    return (
        <Center flex={1} px="3">
            <Box w={{ base: "90%", md: "25%" }}>
                <FormControl isRequired>
                    <Stack mx="4">
                        <FormControl.Label>Username</FormControl.Label>
                        <Input mx="3" placeholder="Input" w={{ base: "75%", md: "25%", }} type="text" defaultValue="admin" placeholder="Username" />
                        <FormControl.HelperText>
                            Must be atleast 6 characters.
                        </FormControl.HelperText>
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                            Atleast 6 characters are required.
                        </FormControl.ErrorMessage>
                    </Stack>
                </FormControl>
                <FormControl isRequired>
                    <Stack mx="4">
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password" defaultValue="12345" placeholder="password" />
                        <FormControl.HelperText>
                            Must be atleast 6 characters.
                        </FormControl.HelperText>
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                            Atleast 6 characters are required.
                        </FormControl.ErrorMessage>
                    </Stack>
                </FormControl>
            </Box>
        </Center>
    )
}
