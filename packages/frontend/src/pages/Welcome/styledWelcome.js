import styled from 'styled-components'
import img from '../../assets/welcome.png'

export const WelcomeContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 99vw;
    height: 98vh;
    background-image: url(${img});
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;

    h2{
        padding-right: 1rem;
        color: blue;
        font-weight: 700;
    }

`