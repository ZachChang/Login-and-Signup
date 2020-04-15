import styled from 'styled-components';

export const SignupWrapper = styled.div`
    width: 50%;
    text-align: center;
    position: absolute;
    top: 20%;
    left: 25%;

    form {
        width: 360px;
        margin: 0 auto;
        padding: 15px 0;
    }
`

export const SignupItem = styled.div`
    input {
        border-color: ${props => props.error ? 'red' : 'gray'}   
    }
`