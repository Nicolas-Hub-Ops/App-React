import './header.css';
import styled from 'styled-components';

const Container = styled.div`
    background: #d9d9d9;
`

const Header = ({ Title }) => {
    return (
        <Container>
            <p className='title__page'>{ Title }</p>
        </Container>
    )
}

export default Header;