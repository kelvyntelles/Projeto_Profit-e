import styled from 'styled-components'

export const Container = styled.header`
    background: #FFFFFF;
    position: absolute;
    width: 100%;
    height: 80px;
    left: 0px;
    top: 0px;
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 1rem 1rem 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    
    .logo {
        padding: 1rem 0 0 8rem;
    }

    form {
        border: 0;
        border-radius: 0.25rem;
        height: 3rem;
        font-size: 1rem;
        padding-top: 1rem;
        
        input {
            border: 0;
            padding: 1rem 2rem 0 0;
            font-size: 1rem;
        }  

        img {
            height: 15px;
        }
    }

    .minha_conta {
        height: 3rem;
        font-size: 1rem;
        padding-top: 0.5rem;

        a {
            margin-right: 1rem;
            font-size: 1.5rem;
        }

        img {
            margin-right: 1rem;
        }
    }
`