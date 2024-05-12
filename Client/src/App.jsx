import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
    </BrowserRouter>
  )
}
