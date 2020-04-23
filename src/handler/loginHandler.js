import React from 'react';
import apiUtility from '../utils/apiUtility';
import { useSignupForm } from '../utils/customHooks';

export default Component => props => {
    const signup = (formData) => {
        apiUtility.login(formData)
            .then( res => console.log(res))
            .catch(err => console.log(err))
    }
    const {inputs, handleInputChange, handleSubmit, errors, isShowError} = useSignupForm(signup);

    props = {
        ...props,
        inputs,
        handleInputChange,
        handleSubmit,
        errors,
        isShowError
    };

    return (
        <Component {...props} />
    );
}