import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PagesRouter } from './components/routes/PagesRouter';

import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <PagesRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
