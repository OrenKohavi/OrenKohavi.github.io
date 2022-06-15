import './Homescreen.css';
import profilepic from './img/crewmate_profilepic.jpg';
import { Navigate, useLocation, Link } from 'react-router-dom';
import {isMobile} from 'react-device-detect'
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";

export default function Homescreen(props) {
    const landing_style = {
        backgroundColor: props.landingbg,
    }
    const location = useLocation();
    let should_redirect = !(location.pathname.includes("/home"));
    if (isMobile){
        return (
            <div className="Mobile-Homescreen">
                {should_redirect ? <Navigate to="/home" /> : null}
                <h1>Mobile page -- WIP</h1>
                <h2>View my website on a desktop computer for the best experience</h2>
            </div>
        )
    }
    return (
        <div className="Homescreen">
            {should_redirect ? <Navigate to="/home" /> : null}
            <div className="landing" style={landing_style}>
                {/* Full-height landing page */}
                <br></br>
                <h1 className="introtext white centered">Hi, I'm Oren</h1>
                <h2 className="white centered">I'm a tech person, blah blah</h2>
                <h2 className="white centered">Rather than using a template, I decided to build an highly-performant website from scratch using react</h2>
                <br></br>
                <img src={profilepic} alt="impasta!" className="profilepic"/>
                <h2 className="white centered">Download my resume <u>here</u></h2>
            </div>
            <div className="projects_landing centered">
                <h1 className="centered">Making projects is cool, see all my projects here!</h1>
                <Link to={"/projects"}><AwesomeButton type="primary">Projects</AwesomeButton></Link>
                
            </div>
            <div id="tmp">
                <h1 className="centered">Just a temporary (plaintext) website for now</h1>
                <h2 className="centered">Eventually, this will have links to everywhere</h2>
                <h2 className="centered">It will also have my picture and resume</h2>
            </div>
            <img src={profilepic} alt="impasta!" className="profilepic"/>
            <div className="sourceCodeDisplay centered">
                <p>This website was coded from scratch in React</p>
                <span>Code is available </span> <a href="https://github.com/OrenKohavi/OrenKohavi.github.io">Here</a>
            </div>
        </div>
    )
}