//import logo from './logo.svg';
import React from 'react';
import './App.css';
import MiddleLeft from './components/slidebar/middleLeft/middleLeft';
import MiddleRight from './components/content/middleRight/middleRight';
import Header from './components/header/header';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="rootMySocial">
          <Header/>
          <div className="wrapperMiddle">
            <MiddleLeft/>
            <MiddleRight/>
          </div>
      </div>
    </BrowserRouter>
  );
}




export default App;
