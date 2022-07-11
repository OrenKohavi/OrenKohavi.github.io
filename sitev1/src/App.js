import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Homescreen from './pages/Homescreen';
import About from './pages/About';
import Projects from './pages/Projects';
import Sorting from './Project_Pages/Sorting';
import MyNavbar from './components/MyNavbar';
import PageNotFound from './pages/PageNotFound';
import RedirectHome from './components/RedirectHome'
import Bella from './pages/Bella';



function App() {
  const background = "#01112B"
  //const inactive = "#3D77A4"
  //const active = "#326186"
  const location = useLocation()
  const [hideNavbar, setHideNavbar] = useState(false)
  var navbar = <MyNavbar variant={'dark'} hide={hideNavbar}/>

  useEffect(() => {
    if (location.pathname.toLowerCase().includes("/bella")) {
      setHideNavbar(true)
      document.body.style.background = 'lightpink'
    } else {
      setHideNavbar(false)
      document.body.style.background = background
    }
    navbar = <MyNavbar variant={'dark'} hide={hideNavbar}/>
  }, [location])
  return (
    <div className="App">
      <div className='my-navbar-div centered'>
        {navbar}
      </div>
      <div className='routes'>
        <Routes>
          <Route path="/" element={<RedirectHome/>} />
          <Route path="/home" element={<Homescreen/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/projects/sorting" element={<Sorting />} />
          {/*<Route path="/bella" element={<Bella/>} />*/}
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
