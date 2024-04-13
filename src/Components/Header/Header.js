import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../../assets/icons/logo.svg"
import search from "../../assets/icons/search.svg"
import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <Navbar key={'md'} expand={'lg'} className=" mb-3">
          <Container>
            <Navbar.Brand href="/">
                <img src={logo} alt="error" className='navLogo'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'md'}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${'md'}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${'md'}`}
              placement="end"
            >
              <Offcanvas.Body>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Supporter</Offcanvas.Title>
              </Offcanvas.Header>
                <Nav className="justify-content-end flex-grow-1 pe-3 navLinks">
                  <Nav.Link href="/">HOME</Nav.Link>
                  <Nav.Link href="/">SERVICES</Nav.Link>
                  <Nav.Link href="/about">ABOUT</Nav.Link>
                  <Nav.Link href="/contacts">CONTACTS</Nav.Link>
                  <Nav.Link href="#projects">OUR PROJECTS</Nav.Link>
                </Nav>
                <div className='navSearch_block'>
                    <input type="text" placeholder='Search' className='navSearch' />
                    <div className='navSearch_circle'>
                        <img src={search} alt="error" className='navSearch_icon'/>
                    </div>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </header>
  );
}

export default Header;