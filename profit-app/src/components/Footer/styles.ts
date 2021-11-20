import styled from "styled-components";

export const Container = styled.div`
    background: #011627;
    min-height: 260px;
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding-top: 2rem;
    color: #FFFFFF;
    padding-top: 2rem;

    display: grid;
    grid-template-columns: 2fr 1fr 1fr;

    .esquerdaFooter {
        display: grid;
        grid-template-columns: 2fr 2fr;
        padding-top: 0;

        hr {
            height: 3px;
            color: #FF9F1C;
        }

        ul {
            li {
                list-style: none;
            }

            .fonte {
                font-size: 12px;
                color: #D3D3D3;
            }
        }
    }

    .centroFooter {
        padding-top: 4rem;

        .buttonFooter {
            background: #FF9F1C;
            width: 195px;
            height: 38px;
            border-radius: 0.25rem;
            font-weight: 500;
            font-style: normal;
            font-size: 11.8202px;
            line-height: 14px;
            position: relative;
            border: 0;
            color: #FFFFFF;
            margin-bottom: 1rem;

            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.9);
            }
        }
    }
    
    .direitaFooter {
        font-size: 10px;
        padding-top: 7.6rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 810px) {
        display: grid;
        grid-template-columns: 2fr; ;
        grid-template-rows: 2fr;

        .centroFooter {
            padding-left: 4%;
            padding-top: 0;
            padding-bottom: 0;

            .buttonFooter {
                margin-right: 15%;
            }
        }
        
        .direitaFooter {
            padding-top: 1rem;
            padding-left: 5%;
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
`