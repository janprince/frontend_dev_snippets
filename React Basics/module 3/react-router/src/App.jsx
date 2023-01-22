import { useState } from 'react'
import Homepage from "./components/Homepage";
import AboutMe from './components/AboutMe';
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return(
    <>
      <navbar>
        <ul className='navlinks'>
          <Link to={"/"}>Home</Link>
          <Link to={"/about-me"}>About Me</Link>
        </ul>
      </navbar>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-me' element={<AboutMe />} />
      </Routes>
      
    </>
  );
}
