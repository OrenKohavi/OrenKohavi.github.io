import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Homescreen from './Homescreen';
import About from './About';
import Projects from './Projects';
import Sorting from './Project_Pages/Sorting';
import Navbar from './Navbar';


function App() {
  const background = "#FFFFD6"
  const inactive = "#3D77A4"
  const active = "#326186"
  return (
    //Disable overflow for x and y
    <div className="App" style={
        {background: background,
        height:"100vh",
        overflowX:"hidden",
        overflowY:"hidden"}}>
      <Navbar bg={inactive} fg={active}/>
      <div className='routes'>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/projects/sorting" element={<Sorting />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
