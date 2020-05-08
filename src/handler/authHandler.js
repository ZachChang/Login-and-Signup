import React, { useState, useEffect } from 'react';

export default Component => props => {
    const [authToken, setAuthtoken] = useState(null);

    useEffect(() => {
        const token = window.sessionStorage.getItem('authToken');
        if (token) {
            setAuthtoken(token);
        }
    }, [])

    props = {
        ...props,
        authToken
    }

    return <Component {...props} />;
}