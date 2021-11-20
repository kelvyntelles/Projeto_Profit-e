import logoImg from '../../assets/logo.png';
import lupaImg from '../../assets/lupa.png';
import vectorImg from '../../assets/Vector.png';
import lineImg from '../../assets/Line.png';
import brasilImg from '../../assets/brasil.png';
import inglaterraImg from '../../assets/inglaterra.png';
import espanhaImg from '../../assets/espanha.png';
import { Container, Content } from './styles';
import React from 'react';
import { Navbar } from 'reactstrap';

export function Header() {
    return (
        <Container>
            <Content>
                <div className="header">
                    <div>
                        <a type="button"><img className="logo" src={logoImg} alt="profit e" /></a>
                    </div>
                    <div className="headerDireita">
                        <form>
                            <input type="text" placeholder="O que está procurando?"/>
                            <a type="button"><img src={lupaImg} alt="buscar" /></a>
                        </form>
                    </div>
                    <div className="headerDireita">
                        <a type="button"><h5>Minha Conta</h5></a>
                    </div>
                    <div className="headerDireita">
                        <a type="button"><img src={vectorImg} alt="carrinho" /></a>
                    </div>
                </div>
            </Content>        
        </Container>
    );
}