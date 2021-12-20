import React from 'react';
import { HamburgerIcon } from 'native-base';
import _createIconByPath from './_createIconByPath';

export default MenuBarIcon = (props) => {
    return (<_createIconByPath icon={<HamburgerIcon {...props}/>} event={props.event} />);
};