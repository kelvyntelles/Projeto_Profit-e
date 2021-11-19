import { Container } from './styles';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';

export function Banner() {
    return (
        <Container>
            <div className="banner">
                <div className="bannerEsquerda">
                    <h1>Nossa especialidade:
                    <br />
                       experiencia de compra. 
                    </h1>
                </div>
                <div className="bannerDireita">
                    <div>
                        <img className="imgBannerDireita" src={banner3} alt="imagen ilustrativa" />    
                    </div>
                    <div>
                        <img className="img2BannerDireita" src={banner2} alt="imagen ilustrativa" />
                    </div>
                </div>
            </div>
        </Container>
    )
}