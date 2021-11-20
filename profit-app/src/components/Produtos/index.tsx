import { useContext } from "react";
import { api } from '../../services/api';
import { Container, Content } from "./styles";
import tenis1 from '../../assets/tenis1.jpg';
import tenis2 from '../../assets/tenis2.jpg';
import tenis3 from '../../assets/tenis3.jpg';
import tenis4 from '../../assets/tenis4.jpg';
import { TransactionsContext } from './../../ProductsContext';

export function Produtos() {
    const transactions = useContext(TransactionsContext);

    return (
        <Container>
            <Content>
                <h3>Produtos</h3>
                 
                <div className="listaProdutos">
                    {/*
                    {transactions.map(transaction => (
                        <div key={transaction.id} className="item">
                        <img className="imagemProduto" src={tenis1} alt="tenis de corrida" />
                        <div>
                            <p>{transaction.titulo}</p>
                            <p><s>{transaction.precoNormal}</s></p>
                            <h4>{transaction.precoPromocao}</h4>
                            <p>{transaction.precoParcela}</p>
                            <button type="button">Comprar</button>
                        </div>
                    </div>
                    ))}
                    */}
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
                        <img className="imagemProduto" src={tenis2} alt="tenis de corrida" />
                        <div>
                            <p>TÊNIS COURO NIKE</p>
                            <p><s>de R$ 399,00</s></p>
                            <h4>por R$ 299,00</h4>
                            <p>ou em 3x de R$ 99,67</p>
                            <button type="button">Comprar</button>
                        </div>
                    </div>
                    <div className="item">
                        <img className="imagemProduto" src={tenis3} alt="tenis de corrida" />
                        <div>
                            <p>TÊNIS COURO FEMININO</p>
                            <p><s>de R$ 399,00</s></p>
                            <h4>por R$ 299,00</h4>
                            <p>ou em 3x de R$ 99,67</p>
                            <button type="button">Comprar</button>
                        </div>
                    </div>
                    <div className="item">
                        <img className="imagemProduto" src={tenis4} alt="tenis de corrida" />
                        <div>
                            <p>TÊNIS CORRIDA NIKE</p>
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