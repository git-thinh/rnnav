import React from 'react';
import { HamburgerIcon } from 'native-base';
import _createIconByPath from './_createIconByPath';

export default IconBase = (props) => {
    return (<_createIconByPath icon={<HamburgerIcon {...props}/>} event={props.event} />);
};