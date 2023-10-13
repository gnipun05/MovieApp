import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MovieListing from './components/MovieListing/MovieListing'; 
import PageNotFound from './components/PageNotFound/PageNotFound';
import MovieDetail from './components/MovieDetail/MovieDetail';
import './App.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header></Header>
        <div className='container'>
          <Routes>
          <Route path="/" element={<MovieListing/>}/>
          <Route path="/movie/:imdbID" element={<MovieDetail/>}/>
          <Route path="*" element={<PageNotFound/>}/>
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  ); 
}

export default App;