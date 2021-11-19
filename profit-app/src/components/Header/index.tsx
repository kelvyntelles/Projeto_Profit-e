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
                <ul>
                    <li><img className="logo" src={logoImg} alt="profit e" /></li>
                    <li>
                        <form>
                            <input type="text" placeholder="O que está procurando?"/>
                            <img src={lupaImg} alt="buscar" />
                        </form>
                    </li>
                    <li>
                        <a>Minha Conta</a>
                    </li>
                    <li>
                        <img src={vectorImg} alt="carrinho" />
                    </li>
                </ul>
            </Content>        
        </Container>
    );
}