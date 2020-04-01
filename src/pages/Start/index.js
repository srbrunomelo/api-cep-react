import React, { useState } from 'react'; 
import { MdSearch, MdArrowUpward } from 'react-icons/md';  

import { Container } from './styles'; 

import api from '../../services/api';
 
export default function Start() {    
    const [zipCode, setZipCode] = useState('29162149');
    const [street, setStreet] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const [state, setState] = useState(false);
    const [error, setError] = useState(false);
    
    async function search(e) {
        e.preventDefault();

        const data = {
            zipCode
        };

        try {
            const response = await api.get(`/${zipCode}/json/`, data);

            setStreet(response.data.logradouro);
            setDistrict(response.data.bairro);
            setCity(response.data.localidade);
            setUf(response.data.uf); 
            
            setState(true);
            setError(false);
        } catch (err) {
            setState(false);
            setError(true);
        }
    }
 
    return ( 
        <>
            <Container> 
                <>
                    <div className="start-container"> 
                        <form onSubmit={search}>
                            <input 
                                min="8" 
                                type="number"
                                value={zipCode}
                                onChange={e => setZipCode(e.target.value)}
                                placeholder="Digite seu cep aqui"
                            />
                            <button type="submit">
                                <MdSearch size={25} color="#FFF" />
                            </button>
                        </form> 
                    </div>

                    {error
                        ?
                        <div className="data">
                            <p className="error">Cep não encontrado</p>
                        </div>
                        :
                        ''
                    }
                    
                    {state  
                    ?
                        <div className="data" >
                            <ul>
                                <li><strong>Rua: </strong> {street}</li>
                                <li><strong>Bairro: </strong> {district}</li>
                                <li><strong>Cidade: </strong> {city}</li>
                                <li><strong>Estado(UF): </strong> {uf}</li>
                            </ul>
                        </div> 
                    :
                        <div className="data" >
                            <MdArrowUpward size={20} color="#7159C1" />
                        </div>
                    }
                </>
            </Container>
        </>
    );
}
