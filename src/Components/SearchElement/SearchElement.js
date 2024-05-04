import React from 'react';
import './SearchElement.scss';
import { Link } from 'react-router-dom';
const SearchElement = ({title, service, url, children}) => {
    return (
        <Link to={`/${url}`} className='search__element'>
            <div className='element__title'>{title}</div>
            <div className='element__service'>{service}</div>
        </Link>
    );
}

export default SearchElement;
