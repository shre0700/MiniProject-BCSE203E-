
import React from 'react';
import './App.css';
import HeaderComponent from './component/HeaderComponent';
import AboutComponent from './component/AboutComponent';
import ContactComponent from './component/ContactComponent';
import PortfolioComponent from './component/PortfolioComponent';
import Search from './labprogram/Search';


const App = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <AboutComponent />
      <PortfolioComponent/>
      <ContactComponent />
      <Search/>
      
    </div>
  );
}

export default App;
