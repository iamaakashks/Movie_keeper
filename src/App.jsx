import React from 'react';
import Home from './components/Home.jsx';
import {Routes, Route} from 'react-router-dom';
export default function App(){
  return (
    <>
      <main className="w-full min-h-screen px-[10%] pt-[2%]">
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </main>
      
    </>
  )
}