import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Homescreen from './pages/Homescreen';
import About from './pages/About';
import Projects from './pages/Projects';
import Sorting from './Project_Pages/Sorting';
import Navbar from './components/Navbar';
import PageNotFound from './pages/PageNotFound';
import RedirectHome from './components/RedirectHome'


function App() {
  const background = "#FFFFD6"
  const inactive = "#3D77A4"
  const active = "#326186"

  const homepage_bg = "#01112B"

  const location = useLocation()

  useEffect(() => {
    // runs on location, i.e. route, change
    if (location.pathname.includes("/home")) {
      document.body.style.background = homepage_bg
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
          <Route path="/home" element={<Homescreen/>} />
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
