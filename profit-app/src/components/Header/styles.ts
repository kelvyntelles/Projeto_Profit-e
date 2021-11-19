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
    display: flex;
    align-items: center;
    background: #FFFFFF;

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        padding-left: 2rem;

        display: grid;
        grid-template-columns: 250px 270px 250px 250px;

        li {
            form {
                border: 0;
                border-radius: 0.25rem;
                height: 3rem;

                input {
                    border: 0;
                    padding-top: 0.2rem;
                    font-size: 1rem;
                }
            }
        }
    }
`