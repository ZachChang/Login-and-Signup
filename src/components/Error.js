import React from 'react';
import Header from './Header';

export default function Error() {
    return (
        <React.Fragment>
            <Header />
            <div>Something go wrong. Please try again later, or contact us via email.</div>
        </React.Fragment>
    )
}