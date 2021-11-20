import styled from "styled-components";

export const Container =styled.main`
    margin: 0 auto;
    padding: 0;
    min-height: 300px;

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

    @media screen and (max-width: 1086px) {
        .banner {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;

            .bannerEsquerda {
                padding-top: 1rem;
                height: 150px;
            }
            
            .bannerDireita {
                padding-top: 0;
                padding-bottom: 1rem;
                text-align: center;
            }
        }
    }

    @media screen and (max-width: 703px) {
        .banner {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;

            .bannerEsquerda {
                padding-top: 1rem;
                height: 150px;
            }
            
            .bannerDireita {
                padding-top: 0;
                padding-bottom: 2rem;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                text-align: center;

                .imgBannerDireita {
                    margin-bottom: 1rem;
                    width: 60%;
                }

                .img2BannerDireita {
                    width: 60%;
                }
            }
        }
    }
`

