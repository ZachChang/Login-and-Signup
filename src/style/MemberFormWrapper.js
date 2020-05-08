import styled from 'styled-components';

export const MemberFormWrapper = styled.div`    
    .container {
        width: 100%;
        min-width: 270px;
        min-height: 300px;
        text-align: center;
        form {
            margin: 0 auto;
            padding: 15px 0;
        }
    }
`

export const SignupItem = styled.div`
    input {
        border-color: ${props => props.error ? 'red' : 'gray'}   
    }
`