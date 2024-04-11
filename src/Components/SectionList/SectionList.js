import React from 'react';
import "./SectionList.scss";

const SectionList = (props) => {
    return (
        <div className='section__list'>
            {props.children}
        </div>
    );
}

export default SectionList;
