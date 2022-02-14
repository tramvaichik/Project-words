import React from 'react';
import './App.scss';
import Table from './components/Table/Table';
import CardCoup from './components/Cards/CardCoup';
import Error from './components/Error/Error'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter,
  Routes,
  Route
}
  from "react-router-dom";



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/games" element={<CardCoup />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}


export default App;