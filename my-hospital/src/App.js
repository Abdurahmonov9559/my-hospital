import React from 'react'
import Home from './pages/home'
import './App.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from './pages/about';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Services from './pages/services';
import ServicesSingle from './pages/services/single';
import Doctors from './pages/doctors';
import Contact from './pages/contact';
import Appointment from './pages/appointment';
import News from './pages/news';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/single' element={<ServicesSingle />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/news' element={<News />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
