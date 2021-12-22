import React from "react"
import { Dimensions } from 'react-native';
import {
    Input,
    IconButton,
    Checkbox,
    Text,
    Box,
    VStack,
    HStack,
    Heading,
    Icon,
    Center,
    Button, AddIcon, MinusIcon,
    NativeBaseProvider,
} from "native-base"
import { EventRegister } from '../libs/EventRegister';


const Task = (props) => {
    const _title = 'Task';

    const _screenHeight = Dimensions.get('window').height;
    const _screenWidth = Dimensions.get('window').width;
    //console.log(_screenWidth, _screenHeight);


    const instState = [
        {
            title: "Code",
            isCompleted: true,
        },
        {
            title: "Meeting with team at 9",
            isCompleted: false,
        },
        {
            title: "Check Emails",
            isCompleted: false,
        },
        {
            title: "Write an article",
            isCompleted: false,
        },
    ]
    const [list, setList] = React.useState(instState)
    const [inputValue, setInputValue] = React.useState("")

    const addItem = (title) => {
        setList([
            ...list,
            {
                title: title,
                isCompleted: false,
            },
        ])
    }

    const handleDelete = (index) => {
        const temp = list.filter((_, itemI) => itemI !== index)
        setList(temp)
    }

    const handleStatusChange = (index) => {
        const temp = list.map((item, itemI) =>
            itemI !== index ? item : { ...item, isCompleted: !item.isCompleted }
        )
        setList(temp)
    }

    return (
        <Box {...props} flex='1' width={_screenWidth} height={_screenHeight} position='absolute' zIndex={99999} bg='light.50'>
            <Center>
                <Heading m="3">{_title}</Heading>
                <Button onPress={() => { EventRegister.send('TASK_CLOSE'); }}>Close</Button>
                <VStack space={4} width={320}>
                    <HStack space={2}>
                        <Input
                            flex={1}
                            onChangeText={(v) => setInputValue(v)}
                            value={inputValue}
                            placeholder="Add Task"
                        />
                        <IconButton
                            borderRadius="sm"
                            variant="solid"
                            icon={
                                <AddIcon size="sm" color="warmGray.50" />
                            }
                            onPress={() => {
                                addItem(inputValue)
                                setInputValue("")
                            }}
                        />
                    </HStack>
                    <VStack space={2}>
                        {list.map((item, itemI) => (
                            <HStack
                                w="100%"
                                justifyContent="space-between"
                                alignItems="center"
                                key={item.title + itemI.toString()}
                            >
                                <Checkbox
                                    isChecked={item.isCompleted}
                                    onChange={() => handleStatusChange(itemI)}
                                    value={item.title}
                                >
                                    <Text
                                        mx="2"
                                        strikeThrough={item.isCompleted}
                                        _light={{
                                            color: item.isCompleted ? "gray.400" : "coolGray.800",
                                        }}
                                        _dark={{
                                            color: item.isCompleted ? "gray.400" : "coolGray.50",
                                        }}
                                    >
                                        {item.title}
                                    </Text>
                                </Checkbox>
                                <IconButton
                                    size="sm"
                                    colorScheme="trueGray"
                                    icon={
                                        <MinusIcon
                                            size="xs"
                                            color="trueGray.400"
                                        />
                                    }
                                    onPress={() => handleDelete(itemI)}
                                />
                            </HStack>
                        ))}
                    </VStack>
                </VStack>
            </Center>
        </Box>
    )
}

export default Task;
