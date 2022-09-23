import React from 'react';
import './Country.css'

const Country = (props) => {
    const {capital, area, name,flags } = props.country;
    return (
        <div className='country bg-success'>
            <h1>Name : {name.common}</h1>
            <img src={flags.png}></img>
            <h3>Capital:{capital}</h3>
            <p>Area : {area}</p>
        </div>
    );
};

export default Country;