import { Link } from 'react-router-dom';
import './menu.css';
import styled from 'styled-components';

import user from '../../icons/icon-user.png';
import register from '../../icons/icon-register.png';
import portfolio from '../../icons/icon-portfolio.png';
import caution from '../../icons/icon-caution.png';


const Container = styled.div`
    position: fixed;
    background: #383F51;
    height: 100vh;
    width: 20em;
`

const Menu = () => {
    return (
        <Container>
            <h1 className='menu__title'> Dashboard </h1>
            <ul className='menu__options'>
                <Link to='/'>
                    <li className='option'>
                        <img src={caution} alt='icon user' className='icons'/>
                        <p>Atention</p>
                    </li>
                </Link>
                <Link to='/UserList'>
                    <li className='option'>
                        <img src={user} alt='icon client' className='icons'/>
                        <p>User List</p>
                    </li>
                </Link>
                <Link to='/Register'>
                    <li className='option'>
                        <img src={register} alt='icon register' className='icons'/>
                        <p>Register</p>
                    </li>
                </Link>
                <Link to='https://nicolas-hub-ops.github.io/Portfolio/Home/index.html'>
                    <li className='option'>
                        <img src={portfolio} alt='icon portfolio' className='icons'/>
                        <p>Portfolio</p>
                    </li>
                </Link>
            </ul>
        </Container>
    )
}

export default Menu;