import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Homescreen from './Homescreen';
import Sorting from './Project_Pages/Sorting';


function App() {
  return (
    //Disable overflow for x and y
    <div className="App" style={
        {background: "#FAEBD7",
        height:"100vh",
        overflowX:"hidden",
        overflowY:"hidden"}}>
      <div className="NavBar">
        <Link to="/">Home</Link> <span> </span>
        <Link to="/sorting">Sorting</Link>
      </div>
      <div className='Routes'>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/sorting" element={<Sorting />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
