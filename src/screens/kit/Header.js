import React from "react"
import { HStack, Flex, Box, Center, Divider, CloseIcon, CheckIcon, Icon } from "native-base"

export default function Header() {
    const _bgHeader = 'gray.900';

    return (
        <Box safeAreaTop bg={_bgHeader} width='100%' height='32px'>
            <Flex mt="1" direction="row" justifyContent="space-between">
                <Center size="6" bg={_bgHeader}>
                    <CloseIcon size="3.5" color="emerald.500" />
                </Center>
                <Center size="6" bg="primary.200">
                    200
                </Center>
                <Flex direction="row" justifyContent="space-between" bg="primary.100">
                    <Center size="6" bg={_bgHeader}>
                        <CheckIcon size="4" color="emerald.500" />
                    </Center>
                    <Center size="6" bg={_bgHeader}>
                        <CloseIcon size="3.5" color="emerald.500" />
                    </Center>
                </Flex>
            </Flex>
            <Divider mt="0.5" bg="gray.100" height="0.5px" />
        </Box>
    )
}
