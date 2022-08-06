import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, useMemo } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {isMobile} from 'react-device-detect'
import Homescreen from './pages/Homescreen';
import About from './pages/About';
import Projects from './pages/Projects';
import Sorting from './Project_Pages/Sorting';
import MyNavbar from './components/MyNavbar';
import PageNotFound from './pages/PageNotFound';
import RedirectHome from './components/RedirectHome'
import Bella from './pages/Bella'
import FamilyTree from './pages/FamilyTree';



function App() {
  const background = "#01112B"
  //const inactive = "#3D77A4"
  //const active = "#326186"
  const location = useLocation()
  const [hideNavbar, setHideNavbar] = useState(false)

  const navbarHiddenWhen = useMemo(() => { 
    return [ //List of lambdas, if any are true, navbar is hidden.
      () => {return location.pathname.toLowerCase().includes("/bella")},
      () => {return isMobile === true},
    ]
  }, [location])

  const backgroundColorDict = useMemo(() => {
    return {
      "/sorting" : "beige",
      "/bella" : 'linear-gradient(to right, #FFB3D1, #FF89BB)',
    }
  }, [])

  const default_background = background

  //If any of the lambdas in navbarHiddenWhen are true, hide navbar
  useEffect(() => {
    var should_hide_navbar = false;
    for (let i = 0; i < navbarHiddenWhen.length; i++) {
      if (navbarHiddenWhen[i]()) {
        should_hide_navbar = true;
        break;
      }
    }
    setHideNavbar(should_hide_navbar)
  }, [location, navbarHiddenWhen])

  useEffect(() => {
    var set_something = false;
    for (const [url_string, bg_color] of Object.entries(backgroundColorDict)) {
      if (location.pathname.toLowerCase().includes(url_string)) {
        document.body.style.background = bg_color;
        set_something = true;
      }
    }
    if (!set_something) {
      document.body.style.background = default_background;
    }
  }, [location, backgroundColorDict, default_background])

  return (
    <div className="App">
      <div className='my-navbar-div centered'>
        <MyNavbar variant={'dark'} hide={hideNavbar}/>
      </div>
      <div className='routes'>
        <Routes>
          <Route path="/" element={<RedirectHome/>} />
          <Route path="/home" element={<Homescreen/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/projects/sorting" element={<Sorting />} />
          <Route path="/bella" element={<Bella/>} />
          <Route path="/family" element={<FamilyTree/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
