import styled from "styled-components";

export const Container = styled.div`
    background: #FFFFFF;
    min-height: 400px;
    padding-top: 2rem;
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    .listaProdutos {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding-top: 1rem;
        padding-bottom: 2rem;

        .item {
            background: #F2F2F2;
            text-align: center;
            margin-right: 1rem;
            border: 1px solid #F2F2F2;
            box-sizing: border-box;
            border-radius: 0.25rem;
            padding-bottom: 1rem;
            width: 200px;

            .imagemProduto {
                width: 120px;
                height: 120px;
                padding-top: 1rem;
                padding-bottom: 1rem;
            }

            h4 {
                color: #2EC4B6;
            }

            button {
                background: #2EC4B6;
                color: #FFFFFF;
                font-weight: 500;
                border: 0;
                border-radius: 0.25rem;
                width: 80%;
                padding: 0.5rem 0 0.5rem 0;

                transition: filter 0.2s;

                &:hover {
                    filter: brightness(0.9);
                }
            }
        }
    }
`

