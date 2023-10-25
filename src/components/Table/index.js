import { Link } from 'react-router-dom';
import './table.css';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { del, get } from '../Connection';

import exclude from '../../icons/icon-exclude.png';
import change from '../../icons/icon-change.png';
import close from '../../icons/icon-close-page.png';

const Container = styled.div`
display: flex;
justify-content: center;
`



const Table = () => {

    const [ clientes, setClientes ] = useState([]);
    const [ filter, setFilter ] = useState('');
    const [ results, setResults ] = useState([]);
    const [ show, setShow ] = useState();
    const [ userId, setUserId ] = useState('');

    
    const connect = async () => {
        const response = await get()
            setClientes(response)
    }

    useEffect(() => {
        connect()
    }, [])

    useEffect(() => {
        const email = clientes.filter((resp) => 
            resp.email.toLowerCase().includes(filter)
        )
        
        setResults(email)
    }, [clientes, filter])

    const excludeUser = (id) => {
        del(id)
        connect()
    }

    const getIdAndOpenPut = async (id) => {
        setShow(true) 
        setUserId(id)
        console.log(userId)
    }

    const changeUserId = async (id) => {
        console.log(id)
    }        

    useEffect(() => {
        ''
    }, [show])

    const countries = [
        "United States",
        "Canada",
        "United Kingdom",
        "Australia",
        "India",
        "Germany",
        "France",
        "Japan",
        "China",
        "Brazil",
        "Mexico",
        "Argentina",
        "South Africa",
        "Russia",
        "Egypt",
        "Saudi Arabia",
        "New Zealand",
        "Spain",
        "Italy",
      ];
    

    return (
        <div>
            <div className='search__table'>
                <input className='search__table' type='text' placeholder='Search for email' onChange={(e) => setFilter(e.target.value)}/>
            </div>
            
            <div className='register__table'>
                <Link to='/Register'>Add New <span>+</span></Link>
            </div>
            <Container>
                <table className='table__users'>
                    <thead>
                        <tr>
                            <th className='th__photo'>Image</th>
                            <th className='th__name'>Name</th>
                            <th className='th__email'>E-mail</th>
                            <th className='th__country'>Country</th>
                            <th className='th__age'>Age</th>
                            <th className='th__icons'>Change</th>
                            <th className='th__icons'>Exclude</th>
                        </tr>
                    </thead>
                    <tbody>
                        { clientes.length <= 0 ? <tr><td>Carregando...</td></tr> : 
                            results.length <= 0 ? <tr>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>Usuário não encontrado</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                  </tr> :
                                results.map( (cliente) => (
                                    <tr key={cliente._id}>
                                        <td className='td__photo'><img src={cliente.foto} alt="foto de perfil"/></td>
                                        <td className='td__name'>{`${cliente.firstName} ${cliente.lastName}`}</td>
                                        <td className='td__email'>{cliente.email}</td>
                                        <td className='td__country'>{`${cliente.country} -`} <span className='uppercase__state'>{`${cliente.state}`}</span></td>
                                        <td className='td__age'>{cliente.age}</td>
                                        <td className='td__icons'><img src={change} alt="icon alterar" onClick={() => getIdAndOpenPut(cliente._id)}/></td>
                                        <td className='td__icons' onClick={() => {excludeUser (cliente._id); connect()}}><img src={exclude} alt="icon exclude"/></td>
                                    </tr>
                                ))
                        }
                  </tbody>
                </table>
            </Container>

            {
                show === true ? (
                    <div className='form__spacing'>
                        <form className="form__alterar"
                            onSubmit={(e) => changeUserId(userId)}>
                            <div className='spacing__close' onClick={() => setShow(false)}>
                                <img src={close} alt="icon close page"/>
                            </div>
                            <div className='spacing__changes'>
                                <h2 className="chage__title">Change User</h2> 
                            </div>
                            <div className="spacing__changes">
                                <input placeholder='First Name'/>
                                <input placeholder='Last Name'/>
                            </div>
                            <div className='spacing__changes'>
                                <input placeholder='Email'/>
                                <select 
                                    id='pais' 
                                    className='select__form'
                                    >
                                    {
                                        countries.map( (country) => (
                                            <option key={country}>{country}</option>
                                        ) )
                                    }
                                </select>
                            </div>
                            <div className='spacing__changes'>
                                <input placeholder='State' maxLength={2}/>
                                <input placeholder='Age' type='number'/>
                            </div>
                            <div className='spacing__changes'>
                                <button className='change__user'>Change</button>
                            </div>
                        </form>
                    </div>

                ) : ''
            }   

        </div>
    )
}

export default Table;