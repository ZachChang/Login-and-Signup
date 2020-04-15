import styled from 'styled-components';

export const SignupWrapper = styled.div`
    width: 100%;
    text-align: center;
    position: absolute;
    top: calc(50% - 60px);
    height: 120px;
    background: pink;
`

export const SignupItem = styled.div`
    input {
        border-color: ${props => props.error ? 'red' : 'gray'}   
    }
`