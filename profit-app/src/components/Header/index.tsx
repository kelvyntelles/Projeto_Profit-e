import logoImg from '../../assets/logo.png';
import lupaImg from '../../assets/lupa.png';
import vectorImg from '../../assets/Vector.png';
import lineImg from '../../assets/Line.png';
import brasilImg from '../../assets/brasil.png';
import inglaterraImg from '../../assets/inglaterra.png';
import espanhaImg from '../../assets/espanha.png';
import { Container, Content } from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <img className="logo" src={logoImg} alt="profit e" />
                <form>
                    <input type="text" placeholder="O que está procurando?"/>
                    <img src={lupaImg} alt="buscar" />
                </form>
                <span className="minha_conta">
                    <a>
                        Minha Conta 
                    </a>   

                    <img src={vectorImg} alt="carrinho" />
                    <img src={lineImg} alt="espaço" />
                    <img src={brasilImg} alt="brasil" />
                    <img src={espanhaImg} alt="espanha" />
                    <img src={inglaterraImg} alt="inglaterra" />
                </span>
            </Content>
        </Container>
    );
}