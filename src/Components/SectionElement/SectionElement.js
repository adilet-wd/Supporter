import React from 'react';
import './SectionElement.scss';
const SectionElement = (props) => {
    return (
        <div className='section__element'>{props.children}</div>
    );
}

export default SectionElement;
