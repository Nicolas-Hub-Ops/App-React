import { useState } from 'react';
import './form.css';
import styled from 'styled-components';
import { post } from '../Connection';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5em;
    padding: 1em 0;
`

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


const Form = () => {

    const [ first, setFirst ] = useState('');
    const [ last, setLast ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ country, setCountry ] = useState('');
    const [ state, setState ] = useState('');
    const [ genre, setGenre ] = useState('');
    const [ age, setAge ] = useState('');
    
    const navigate = useNavigate();

    const capture = (event) => {
        event.preventDefault()
        const data = {
            "foto": 'https://static.vecteezy.com/ti/vetor-gratis/p3/3715527-imagem-perfil-icone-masculino-icone-humano-ou-pessoa-sinal-e-simbolo-vetor.jpg',
            "firstName": first,
            "lastName": last,
            "email": email,
            "country": country,
            "state": state,
            "genre": genre,
            "age": age
        }
    
        try {
            post(data)
            navigate('/UserList')
            setFirst('');
            setLast('')
            setEmail('')
            setCountry('')
            setState('')
            setGenre('')
            setAge('')
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Container>
            <form 
                className='form__register' 
                onSubmit={capture}>  
                <h2 className='title__form'> New Client </h2>
                <div className='spacing__form'>
                    <fieldset>
                        <label for="FirstName" className='label__form'>First Name</label>
                        <input 
                            className='input__form' 
                            type='text' 
                            placeholder='Roberto, Mateus...' 
                            id='FirstName' 
                            required
                            onChange={(e) => setFirst(e.target.value)}/>
                    </fieldset>
                    <fieldset>
                        <label for="LastName" className='label__form'>Last Name</label>
                        <input 
                            className='input__form' 
                            type='text' 
                            placeholder='Silva, Sousa...' 
                            id='LastName' 
                            required
                            onChange={(e) => setLast(e.target.value)}/>
                    </fieldset>
                </div>
                <div className='spacing__form'>
                    <fieldset>
                        <label for="email" className='label__form'>E-mail</label>
                        <input 
                            className='input__form' 
                            type='email' 
                            placeholder='youremail@dominio.com' 
                            id='email' 
                            required
                            onChange={(e) => setEmail(e.target.value)}/>
                    </fieldset>
                </div>
                <div className='spacing__form'>
                    <fieldset>
                        <label for="pais" className='label__form'>Country</label>
                        <select 
                            id='pais' 
                            className='select__form'
                            onChange={(e) => setCountry(e.target.value)} >
                            {
                                countries.map( (country) => (
                                    <option key={country}>{country}</option>
                                ) )
                            }
                        </select>
                    </fieldset>
                </div>
                <div className='spacing__form'>
                    <fieldset>
                        <label for="estado" className='label__form'>State</label>
                        <input 
                            className='input__form uppercase' 
                            type='text' placeholder='NY, DF, SC...' 
                            id="estado" 
                            maxLength={2} 
                            required
                            onChange={(e) => setState(e.target.value)}/>
                    </fieldset>
                    <fieldset>
                        <label className='label__form' id='age'>Age</label>
                        <input 
                            className='input__form' 
                            type='number' 
                            placeholder='18, 27, 35...' 
                            id='age' 
                            maxLength={2}
                            required
                            onChange={(e) => setAge(e.target.value)}/>
                    </fieldset>
                </div>
                <div className='spacing__form'>
                    <button className='submit__form'>Submit</button>
                </div>
            </form>
        </Container>
    )
}

export default Form;