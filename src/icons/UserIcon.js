import React from 'react';
import _createIconByPath from './_createIconByPath';

export default UserIcon = (props) => {
    const paths = ['M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'];
    return (<_createIconByPath paths={paths} {...props} />);
};