import React from "react"
import {
    FormControl,
    Input, Select,
    Stack,
    WarningOutlineIcon,
    Box, Divider, Radio, Spinner, useToast,
    Center, NativeBaseProvider
} from "native-base"

const LoginScreen = () => {
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

const FormExample = () => {
    return (
        <FormControl>
            <Stack space={5}>
                <Stack>
                    <FormControl.Label>Username</FormControl.Label>
                    <Input variant="underlined" p={2} placeholder="Username" />
                </Stack>
                <Stack>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input variant="underlined" p={2} placeholder="Password" />
                </Stack>
            </Stack>
        </FormControl>
    );
};

const SelectKit = () => {
    let [language, setLanguage] = React.useState('key0');
    const [value, setValue] = React.useState('one');

    return (<>
        <Spinner />
        <Spinner color="danger.400" />
        <Spinner size="sm" />
        <Spinner color="blue.500" size="lg" />
        <Divider />
        <Radio.Group
            name="myRadioGroup"
            value={value}
            onChange={(nextValue) => {
                setValue(nextValue);
            }}
        >
            <Radio value="one" my="1">
                One
            </Radio>
            <Radio value="two" my="1">
                Two
            </Radio>
        </Radio.Group>
        <Divider />
        <Select
            placeholder="Mode of payment"
            selectedValue={language}
            width={150}
            onValueChange={(itemValue) => setLanguage(itemValue)}
        >
            <Select.Item label="Wallet" value="key0" />
            <Select.Item label="ATM Card" value="key1" />
            <Select.Item label="Debit Card" value="key2" />
            <Select.Item label="Credit Card" value="key3" />
            <Select.Item label="Credit Card1" value="key31" />
            <Select.Item label="Credit Card2" value="key32" />
            <Select.Item label="Credit Card3" value="key33" />
            <Select.Item label="Credit Card4" value="key34" />
            <Select.Item label="Credit Card5" value="key35" />
            <Select.Item label="Credit Card6" value="key36" />
            <Select.Item label="Credit Card7" value="key37" />
            <Select.Item label="Credit Card8" value="key38" />
            <Select.Item label="Credit Card9" value="key39" />
            <Select.Item label="Net Banking" value="key4" />
            <Select.Item label="Net Banking1" value="key41" />
            <Select.Item label="Net Banking2" value="key42" />
            <Select.Item label="Net Banking3" value="key43" />
            <Select.Item label="Net Banking4" value="key44" />
            <Select.Item label="Net Banking5" value="key45" />
            <Select.Item label="Net Banking6" value="key46" />
            <Select.Item label="Net Banking7" value="key47" />
            <Select.Item label="Net Banking8" value="key48" />
            <Select.Item label="Net Banking9" value="key49" />
        </Select>
    </>);
};

export default function () {
    const toast = useToast();

    return (
        <NativeBaseProvider>
            <Button
                onPress={() => {
                    toast.show({
                        title: 'Wrong password',
                        placement: 'bottom',
                        status: 'warning',
                    });
                }}
            >
                Button
            </Button>
            <Center flex={1} px="2">
                <SelectKit />
            </Center>
            <Center flex={1} px="2">
                <FormExample />
            </Center>
            <Center flex={1} px="2">
                <LoginScreen />
            </Center>
        </NativeBaseProvider>
    );
}
