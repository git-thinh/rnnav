import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon, HamburgerIcon } from 'native-base';
import { G, Path } from 'react-native-svg';
import { EventRegister } from '../libs/EventRegister'

export default _createIconByPath = (props) => {
    let size = props.size, color = props.color, paths = [];

    let func = () => { if(typeof props.press == 'function') props.press(); };
    const ev = props.event;
    const type = typeof ev;
    if (type == 'string') func = () => { EventRegister.emit('EVENT_APP', { code: ev }); };
    else if (type == 'object') func = () => { EventRegister.emit('EVENT_APP', ev); };

    const icon = props.icon;
    if (icon)
        return (<TouchableOpacity activeOpacity={0.7} onPress={func}>{icon}</TouchableOpacity>);

    if (Array.isArray(props.paths)) paths = props.paths;
    const pathList = paths.map((path, i) => { return (<Path key={i} fill="currentColor" d={path} />); });
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={func}>
            <Icon viewBox="0 0 16 16" size={size} color={color}>
                <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">{pathList}</G>
            </Icon>
        </TouchableOpacity>
    );
};