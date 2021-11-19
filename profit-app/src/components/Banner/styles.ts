import styled from "styled-components";

export const Container =styled.main`
    margin: 0 auto;
    padding: 0;
    height: 300px;

    .banner {
        display: grid;
        grid-template-columns: 2fr 2fr;

        .bannerEsquerda {
            background: #011627;
            text-align: center;
            color: white;
            height: 300px;
            padding-top: 6rem;
        }

        .bannerDireita {
            background: #011627;
            padding-top: 4rem;
            display: grid;
            grid-template-columns: 2fr 2fr;

            .imgBannerDireita {
                height: 150px;
                padding-right: 1rem;
            }       
            
            .img2BannerDireita {
                height: 150px;
                padding-right: 1rem;
            }
        }
    }
`

