import styled from 'styled-components';

export const MemberFormWrapper = styled.div`
    width: 50%;
    min-width: 270px;
    text-align: center;
    form {
        max-width: 450px;
        margin: 0 auto;
        padding: 15px 0;
    }
`

export const SignupItem = styled.div`
    input {
        border-color: ${props => props.error ? 'red' : 'gray'}   
    }
`