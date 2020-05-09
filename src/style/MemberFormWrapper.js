import styled from 'styled-components';

export const MemberFormWrapper = styled.div`    
    .container {
        width: 500px;
        form {
            display: flex;
            flex-direction: column;
            margin: 10%;
        }
        @media only screen and (max-width: 414px) {
            width: 100%;
        }
    }
`

export const SignupItem = styled.div`
    input {
        border-color: ${props => props.error ? 'red' : 'gray'}   
    }
`