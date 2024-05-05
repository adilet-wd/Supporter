import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import SearchElement from '../../Components/SearchElement/SearchElement';
import "./Search.scss";
let serviceList = [
    {
        name: "PC workspace maintenance",
        service: "IT Service",
        url: "it-service",
    },
    {
        name: "Landing web pages",
        service: "IT Service",
        url: "it-service",
    },
    {
        name: "Printer maintenance",
        service: "IT Service",
        url: "it-service",
    },
    {
        name: "Hardware repair",
        service: "IT Service",
        url: "it-service",
    },
    {
        name: "Software maintenance",
        service: "IT Service",
        url: "it-service",
    },
    {
        name: "Branding Design",
        service: "Design Service",
        url: "design-service",
    },
    {
        name: "Social Media Creative",
        service: "Design Service",
        url: "design-service",
    },
    {
        name: "Illustration Design",
        service: "Design Service",
        url: "design-service",
    },
    {
        name: "Presentation Design",
        service: "Design Service",
        url: "design-service",
    },
    {
        name: "Logo Design",
        service: "Design Service",
        url: "design-service",
    },
    {
        name: "Product Design",
        service: "Design Service",
        url: "design-service",
    },
    {
        name: "Motion Design",
        service: "Design Service",
        url: "design-service",
    },
    {
        name: "Web Design",
        service: "Design Service",
        url: "design-service",
    },
    {
        name: "Event Design",
        service: "Design Service",
        url: "design-service",
    },
    {
        name: "T-Shirt Design",
        service: "Design Service",
        url: "design-service",
    },
    {
        name: "Photo Editing",
        service: "Design Service",
        url: "design-service",
    },
    {
        name: "Social Media Kit Design",
        service: "Design Service",
        url: "design-service",
    },
    {
        name: "Flyer Design",
        service: "Design Service",
        url: "design-service",
    },
    {
        name: "Catalogue Design",
        service: "Design Service",
        url: "design-service",
    },
    {
        name: "UI UX Design",
        service: "Design Service",
        url: "design-service",
    },
    {
        name: "Label Design",
        service: "Design Service",
        url: "design-service",
    },
    {
        name: "ID Card Design",
        service: "Design Service",
        url: "design-service",
    },
    {
        name: "Leaflet Design",
        service: "Design Service",
        url: "design-service",
    },
    {
        name: "Business Card Design",
        service: "Design Service",
        url: "design-service",
    },
    {
        name: "Ai fitness trainer",
        service: "Ai Services",
        url: "ai-services",
    },
    {
        name: "Ai health care",
        service: "Ai Services",
        url: "ai-services",
    },
    {
        name: "Ai office manager",
        service: "Ai Services",
        url: "ai-services",
    },
    {
        name: "Ai security",
        service: "Ai Services",
        url: "ai-services",
    },
];


export default function Search() {
    const [foundList, setFoundList] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchParam = queryParams.get('target');

    useEffect(() => {
        if (searchParam !== null) {
            let newList = [];
            for(let i = 0; i < serviceList.length; i++){
                if(serviceList[i].name.toLowerCase().includes(searchParam.toLowerCase())){
                    newList.push(serviceList[i]);
                }
            }
            setFoundList(newList);
        }
    }, [searchParam]);
    return (
        <>  
            <Container className='search__block'>
                {foundList.length > 0 
                ? (
                    <div className='search__list'>
                        {foundList.map((item, index) => {
                            return (
                                <SearchElement key={index} url={item.url} title={item.name} service={item.service}></SearchElement>
                            );
                        })}
                    </div>
                ) 
                :(
                    <div className='notFound__text'>
                        <Link to={'/'}><h1 className='text-center'>No results found</h1></Link>
                    </div>
                )}
            </Container>

        </>
    )
}
