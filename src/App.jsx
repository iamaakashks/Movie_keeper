import React from 'react';
import Home from './components/Home.jsx';
import {Routes, Route} from 'react-router-dom'
import Favourites from './pages/Favourites.jsx';
import Navbar from './components/Navbar.jsx';
export default function App(){
  return (
    <>
      <main className="w-full min-h-screen px-[10%] pt-[2%]">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourite' element={<Favourites />} /> 
        </Routes>
      </main>
      
    </>
  )
}