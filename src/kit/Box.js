import React, { useState } from 'react';
import { Text } from "native-base";

const Box = (props) => {
    return <Text bg='primary.600' {...props}>12345</Text>
};

export default Box;