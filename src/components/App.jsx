import React from 'react'


import CountryList from './Sections/CountryList.jsx';
import Apartments from './Sections/Apartments.jsx';
import Developments from './Sections/Developments.jsx';
import Property from './Sections/Property.jsx';
import Footer from './components/Footer.jsx';
import CountryCards from './Sections/TopCountries.jsx';
import Home from './components/Home.jsx';


const App = () => {
  return (
    <>
    <Home />
   {/* <PropertySearch /> */}
   <CountryCards />
   <CountryList />
   <Apartments />
   <Developments />
   <Property />
   <Footer />
  
    </>
  )
}

export default App
