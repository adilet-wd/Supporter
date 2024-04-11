import React from 'react';
import './SectionBlock.scss';
const SectionBlock = (props) => {
    return (
        <div className='section__block'>
            {props.children}
        </div>
    );
}

export default SectionBlock;
