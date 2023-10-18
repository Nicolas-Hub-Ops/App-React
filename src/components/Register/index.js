import Header from '../Header';
import Form from '../Form';
import './register.css';
import styled from 'styled-components';

const Container = styled.div`
    width: 83.1vw;
    margin-left: 20em;
`

const Register = () => {
    return (
        <Container>
            <Header Title="Register"/>
            <Form />
        </Container>
    )
}

export default Register;