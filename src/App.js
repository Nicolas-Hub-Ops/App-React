import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Menu from './components/Menu';
import UserList from './components/UserList';
import Caution from './components/Caution';
import Register from './components/Register';

const Container = styled.div`
  display: flex;
  justify-content: left;
`

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Menu />
          <Routes>
            <Route 
              path='/' 
              element={ 
                <Caution />
              }/>
            
            <Route 
              path='/UserList'
              element={
                <UserList />
              }
            />

            <Route 
              path='/Register'
              element={
                <Register />
              }
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
