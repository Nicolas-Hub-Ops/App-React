import Header from '../Header';
import Table from '../Table';
import './userlist.css';
import styled from 'styled-components';

const Container = styled.div`
    width: 83.1vw;
    margin-left: 20em;
`

const UserList = () => {
    return (
        <Container>
            <Header Title="User List"/>
            <Table />
        </Container>
    )
}

export default UserList;