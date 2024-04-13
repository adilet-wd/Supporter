import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const Layout = () => {
    return (
        <>
            <Header></Header>
            <main className='page_block'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Layout;
