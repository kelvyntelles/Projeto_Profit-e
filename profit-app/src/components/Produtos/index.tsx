import { Container, Content } from "./styles";
import tenis1 from '../../assets/tenis1.jpg';

export function Produtos() {
    return (
        <Container>
            <Content>
                <h3>Produtos</h3>
                <div className="listaProdutos">
                    <div className="item">
                        <img className="imagemProduto" src={tenis1} alt="tenis de corrida" />
                        <div>
                            <p>TÊNIS COURO PUMA</p>
                            <p><s>de R$ 399,00</s></p>
                            <h4>por R$ 299,00</h4>
                            <p>ou em 3x de R$ 99,67</p>
                            <button type="button">Comprar</button>
                        </div>
                    </div>
                    <div className="item">
                        <img className="imagemProduto" src={tenis1} alt="tenis de corrida" />
                        <div>
                            <p>TÊNIS COURO PUMA</p>
                            <p><s>de R$ 399,00</s></p>
                            <h4>por R$ 299,00</h4>
                            <p>ou em 3x de R$ 99,67</p>
                            <button type="button">Comprar</button>
                        </div>
                    </div>
                    <div className="item">
                        <img className="imagemProduto" src={tenis1} alt="tenis de corrida" />
                        <div>
                            <p>TÊNIS COURO PUMA</p>
                            <p><s>de R$ 399,00</s></p>
                            <h4>por R$ 299,00</h4>
                            <p>ou em 3x de R$ 99,67</p>
                            <button type="button">Comprar</button>
                        </div>
                    </div>
                    <div className="item">
                        <img className="imagemProduto" src={tenis1} alt="tenis de corrida" />
                        <div>
                            <p>TÊNIS COURO PUMA</p>
                            <p><s>de R$ 399,00</s></p>
                            <h4>por R$ 299,00</h4>
                            <p>ou em 3x de R$ 99,67</p>
                            <button type="button">Comprar</button>
                        </div>
                    </div>
                </div>
            </Content>
        </Container>
    )
}