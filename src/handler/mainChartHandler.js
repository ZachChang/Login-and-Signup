import React from 'react';

export default Component => props => {

    props = {
        ...props,
    };

    return (
        <Component {...props} />
    );
}