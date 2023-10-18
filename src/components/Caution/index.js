import Header from '../Header';
import './caution.css';
import styled from 'styled-components';
import atention from '../../icons/icon-atention.png';

const Container = styled.div`

    width: 83.1vw;
    margin-left: 20em;
`

const Space = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10em;
`

const Caution = () => {
    return (
        <Container>
            <Header Title="Caution"/>
            <Space>
                <div className='message__container'>
                    <img src={atention} alt="icon de atenção"/>
                    <h3>Aplicação React</h3>
                    <p>Esta aplicação foi totalmente criada por mim, Nicolas Silva Canabarro, com o objetivo de demonstrar e comprovar meus conhecimentos em React.</p>
                    <p>Aqui, nesta aplicação há o consumo de API usando Axios, e esta API também foi criada por mim, é uma API Node.js com Express e banco de dados MongoDB.</p>
                    <p>Para mais informações da API, segue o link do GitHub da <a className='link__api' href='https://github.com/Nicolas-Hub-Ops/'>API.</a></p>
                    <p>Ass. Nicolas Silva</p>
                </div>
            </Space>
        </Container>
    )
}

export default Caution;