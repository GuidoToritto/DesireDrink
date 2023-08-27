import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Thanks } from './Pages/Thanks';
import { Main } from './Main';



export const Pages = () => {
  return (
    <section>
      <Routes>  
      <Route path="/" element={<Main/>}/>
        <Route path="/thanks" element={<Thanks/>} />    
      </Routes>
    </section>
  )
}
