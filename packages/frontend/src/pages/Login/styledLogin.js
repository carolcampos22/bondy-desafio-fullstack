import styled from 'styled-components'

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 98vw;
    height: 98vh;
    color: darkviolet;
    background-color: rgba(0, 0, 0, 0.790);

    
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 20vw;
    height: 60vh;
    margin-bottom: 1rem;
    border: 3px solid darkviolet;
    border-radius: 2rem;
    padding: 1rem;
    

    input{
        border: 1px solid blue;
        border-radius: 1.5rem;
        height: 5vh;
        width: 15vw;
        padding-left: 1rem;

        &::placeholder{
            padding-left: .5rem;
        }
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        width: 15vw;
        border-radius: 1.5rem;
        font-size: 1rem;
        font-weight: 700;
        color: #FFF;
        background-color: darkviolet;
        border: none;

    }
`