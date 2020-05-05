import styled from 'styled-components';

export const MemberFormWrapper = styled.div`
    background: #E8CBC0;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #636FA4, #E8CBC0);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #636FA4, #E8CBC0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        width: 50%;
        min-width: 270px;
        text-align: center;
        form {
            max-width: 450px;
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