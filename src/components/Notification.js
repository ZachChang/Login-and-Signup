import React from 'react'

export default props => {
    const { type } = props;
    const res = () => {
        switch (type) {
            case 'error':
                return 'error'
            case 'success':
                return 'success';
            default:
                return 'error'
        }
    }
    return (
        <div>
            {res()}
        </div>
    )
}
