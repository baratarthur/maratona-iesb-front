import React, { useState } from 'react';

import { api } from '../services';

const DefaultChart = () => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try{
            const filmes = await api.get('/filmes');
            console.log('chamou')
            if(!data.length) setData(filmes.data);
        } catch (err) {
            console.log(err);
        }
    }

    fetchData();

    return (
        <div className="container" style={{backgroundColor:'grey'}} >
            <div className='row' >
                {data.map(filme => (
                    <div key={filme.id} className="col-sm-6 col-md-4" >
                        {filme.titulo}
                        <br />
                        <img src={filme.imagem} style={{width:'100px',height:'150px'}} />
                        <br/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DefaultChart;