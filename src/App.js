import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Страницы
import Home from './Pages/Home/Home'
import Notfoundpage from './Pages/Notfoundpage/Notfoundpage'
import Layout from './Components/Layout/Layout';
import ItService from './Pages/ItService/ItService';
import DesignService from './Pages/DesignService/DesignService';
import DigitalStrategy from './Pages/DigitalStrategy/DigitalStrategy';
import AiService from './Pages/AiService/AiService';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contacts from './Pages/Contacts/Contacts';
import OurProjects from './Pages/OurProjects/OurProjects';
import Search from './Pages/Search/Search';

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!document.querySelector(".navbar-toggler").classList.contains("collapsed")){
      document.querySelector(".navbar-toggler").click()
    }
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/projects' element={<OurProjects />} />
          <Route path="/it-service" element={<ItService/>} />
          <Route path="/design-service" element={<DesignService/>} />
          <Route path="/digital-strategy" element={<DigitalStrategy/>} />
          <Route path="/ai-services" element={<AiService/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="*" element={<Notfoundpage/>} />
        </Route>
      </Routes>
    </>


  );
}

export { App };
