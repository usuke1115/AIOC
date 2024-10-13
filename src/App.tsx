import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Copy } from './components/copy';
import { Home } from './components/home';
import { Page404 } from './components/page404';
import { Receive } from './components/receive';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/copy' element={<Copy />} />
        <Route path='/receive' element={<Receive />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
