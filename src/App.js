import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { PagesRouter } from './components/routes/PagesRouter';
import { ScrollToTop } from './components/ScrollToTop';

import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Provider store={store}>
        <Header />
        <PagesRouter />
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
