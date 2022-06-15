import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Homescreen from './Homescreen';
import About from './About';
import Projects from './Projects';
import Sorting from './Project_Pages/Sorting';
import Navbar from './Navbar';
import PageNotFound from './PageNotFound';
import RedirectHome from './pages/RedirectHome'


function App() {
  const background = "#FFFFD6"
  const inactive = "#3D77A4"
  const active = "#326186"
  const landing_page_bg = "#01112B"

  const location = useLocation()

  useEffect(() => {
    // runs on location, i.e. route, change
    if (location.pathname.includes("/home")) {
      document.body.style.background = "white"
    } else {
      document.body.style.background = background
    }
  }, [location])
  return (
    <div className="App">
      <Navbar bg={inactive} fg={active}/>
      <div className='routes'>
        <Routes>
          <Route path="/" element={<RedirectHome />} />
          <Route path="/home" element={<Homescreen landingbg={landing_page_bg}/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/projects/sorting" element={<Sorting />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
