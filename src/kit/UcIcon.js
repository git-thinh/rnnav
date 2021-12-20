import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { G, Path } from 'react-native-svg';

const CartIcon = (props) => {
    return (
        <Icon viewBox="0 0 16 16" {...props}>
            <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
                <Path fill="currentColor" d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </G>
        </Icon>
    )
};

const _UserIcon = (props) => {
    return (
        <Icon viewBox="0 0 16 16" {...props}>
            <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
                <Path fill="currentColor" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </G>
        </Icon>
    )
};

const _QRCodeIcon = (props) => {
    return (
        <Icon viewBox="0 0 16 16" {...props}>
            <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
                <Path fill="currentColor" d="M2 2h2v2H2V2Z" />
                <Path fill="currentColor" d="M6 0v6H0V0h6ZM5 1H1v4h4V1ZM4 12H2v2h2v-2Z" />
                <Path fill="currentColor" d="M6 10v6H0v-6h6Zm-5 1v4h4v-4H1Zm11-9h2v2h-2V2Z" />
                <Path fill="currentColor" d="M10 0v6h6V0h-6Zm5 1v4h-4V1h4ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Z" />
                <Path fill="currentColor" d="M7 12h1v3h4v1H7v-4Zm9 2v2h-3v-1h2v-1h1Z" />
            </G>
        </Icon>
    )
};

export default CartIcon;