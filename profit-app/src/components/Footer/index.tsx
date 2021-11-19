import { Container, Content } from "./styles";

export function Footer() {
    return (
        <Container>
            <Content>
                <div>
                    <div className="esquerdaFooter">
                        <div>
                            Localização
                            <hr />
                            <ul>
                                <li>São Paulo</li>
                                <li className="fonte">Rua do Rócio, 4231/801</li>
                                <li className="fonte">Vila Olímpica - SP</li>
                                <li className="fonte">0454-000</li>
                                <li className="fonte">+55 11 3333 3333</li>
                            </ul>
                        </div>
                        <div>
                            <br />
                            <hr />
                            <ul>
                                <li>Rio de Janeiro</li>
                                <li className="fonte">Vol. da Pátria, 301/702</li>
                                <li className="fonte">Botafogo - RJ</li>
                                <li className="fonte">22270-000</li>
                                <li className="fonte">+55 21 3333 3333</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="centroFooter">
                    <button className="buttonFooter" type="button">
                        ENTRE EM CONTATO
                    </button>
                    <button className="buttonFooter" type="button">
                        FALE COM NOSSO CONSULTOR ONLINE
                    </button>
                </div>
                <div className="direitaFooter">
                    <div>
                        created by
                        <h5>Profit-e</h5>
                    </div> 
                    <div>
                        created by
                        <h5>Profit-e</h5>
                    </div> 
                </div>
            </Content>
        </Container>
    )
}