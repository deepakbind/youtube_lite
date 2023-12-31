import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Feed from './components/Feed';
import SearchResult from './components/SearchResult';
import VideoDetails from './components/VideoDetails';
import { AppContext } from './context/contextApi';
const App = () => {
  return(
  <AppContext>
  <BrowserRouter>
  <div className='flex flex-col h-full'>
  <Header/>
  <Routes>
  <Route path='/' element= {}/>
  <Route path='/' element= {}/>
  <Route path='/' element= {}/>

  </Routes>
  </div>
  </BrowserRouter>
  </AppContext>
  );
};

export default App; 