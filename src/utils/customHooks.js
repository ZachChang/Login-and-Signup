import { useState } from  'react';

export const useSignupForm = (callback) => {
    const formFields = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    };
    const initErrors = () => {
        let errors = {...formFields};
        for (const key in formFields) {
            errors[key] = `${key} can not be empty`
        }
        return errors;
    }
    const [inputs, setInputs] = useState(formFields);
    const [errors, setErrors] = useState(initErrors());
    const [isShowError, showError] = useState(false);

    const validateField = (fieldName, value, fieldValidationErrors) => {
        if (value === '') {
            fieldValidationErrors[fieldName] = `${fieldName} can not be empty`;    
        } else {
            switch (fieldName) {
                case 'username':
                    const isTooShort = value.length < 3;
                    const isTooLong = value.length > 10;
                    fieldValidationErrors.username = isTooShort ? 'Nono too short!' : isTooLong ? 'Nono too long!' : '';
                    break;
                case 'email':
                    const isEmailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                    fieldValidationErrors.email = isEmailValid ? '' : 'This email type is invalid';
                    break;
                case 'password':
                    const isPasswordValid = value.length > 6;
                    fieldValidationErrors.password = isPasswordValid ? '' : 'Your password length must be longer than 6';
                    break;
                case 'confirmPassword':
                    const isCPasswordValid = value === inputs.password;
                    fieldValidationErrors.confirmPassword = isCPasswordValid ? '' : 'Both password need to be the same';
                    break;
                default:
                    break;
            }
        }
        setErrors(fieldValidationErrors);
    }

    const isFormValid = () => {
        const errorsArray = Object.values(errors);
        for (let i = 0; i < errorsArray.length; i++) {
            if (errorsArray[i]) return false;
        }
        return true;
    }

    const handleSubmit = (event) => {        
        if (event) event.preventDefault();
        showError(true);
        const test = isFormValid();
        console.log(test);
        
        if (isFormValid()) callback(inputs);
    }

    const handleInputChange = (event) => {
        event.persist();
        const name = event.target.name;
        const value = event.target.value;
        let fieldValidationErrors = {...errors};
        setInputs(inputs => (
            {
                ...inputs,
                [name]: value
            }
        ));
        validateField(name, value, fieldValidationErrors);
    }

    return { inputs, handleSubmit, handleInputChange, errors, isShowError };
}
