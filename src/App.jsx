import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Res from './components/Res';
import Commercial from './components/Commercial';
import Invest from './components/Invest';
import Rent from './components/Rent';
import Home from './components/Home';
import About from './components/About';
import Careers from './components/Careers';
import Advertise from './components/Advertise';
import UnitedState from './components/UnitedState';
import Partnerwithus from './components/Partnerwithus';
import PropertyListing from './components/PropertyListing';
import View from './components/View';
import Reviews from './components/Review';
import SimilarListings from './components/SimilarListings';
import ContactForm from './components/ContactForm';
import AuthForm from './components/AuthForm';
import PrivacyPolicy from './components/PrivacyPolicy';




const App = () => {
  return (
    <Router>
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/auth' element={<AuthForm />} />
       <Route path='/contact' element={<ContactForm />} />
        <Route path="/residential" element={<Res />} />
        <Route path="/commercial" element={<Commercial />} /> 
        <Route path="/Invest" element={<Invest />} /> 
        <Route path="/Rent" element={<Rent />} />
        <Route path="/about" element={<About />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/advertise' element={<Advertise />} />
        <Route path='/unitedstate' element={<UnitedState />} />
        <Route path='/partner' element={<Partnerwithus />} />
        <Route path='/property' element={<PropertyListing />} />
        <Route path='/view' element={<View />} />
        <Route path='/review' element={<Reviews />} />
        <Route path='/similar'element={<SimilarListings />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        
        
      </Routes>
    </Router>
  );
};

export default App;
