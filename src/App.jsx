// import { useState } from 'react';
import React from 'react';
import Header from './Components/Header';
import Home from './Pages/Home_page/Home';
import Footer from './Components/Footer';
import Recipe_vault from './Pages/Recipe_vault';
import Our_team from './Pages/Our_team';


function App() {
  return (
    <>
      <Header/>
      <Home/>
      {/* <Recipe_vault/> */}
      {/* <Our_team/> */}
      <Footer/>
    </>
  )
}

export default App
