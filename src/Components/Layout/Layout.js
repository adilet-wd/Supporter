import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';


const Layout = () => {
    return (
        <>
            <Header></Header>
            <main className='page_block'>
                <Outlet></Outlet>
            </main>
        </>
    );
}

export default Layout;
