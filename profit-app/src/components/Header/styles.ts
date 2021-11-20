import styled from 'styled-components'

export const Container = styled.header`
    margin: 0 auto;
    max-width: 100%;
    background: #FFFFFF;
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 1rem 1rem 2rem;
    background: #FFFFFF;

    .header {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;

        .headerDireita {
            text-align: right;
            
            input {
                border-top: 0;
                border-left: 0;
                border-right: 0;
            } 
        }
    }

    @media screen and (max-width: 862px) {
        .header {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 2fr 1fr;
            align-items: center;
        }
    }
`