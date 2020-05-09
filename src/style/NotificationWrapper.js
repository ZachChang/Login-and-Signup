import styled from 'styled-components';

export const NotificationWrapper = styled.div`    
    width: 100%;
    height: ${props => props.isShow ? '30px' : '0px'};
    color: #fff;
    background: #00AB84;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: height 1s;
`