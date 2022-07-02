import './Homescreen.css';
import '../global.css'
import profilepic from '../img/headshot.png';
import { Link } from 'react-router-dom';
import {isMobile} from 'react-device-detect'
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";

export default function Homescreen(props) {
    const description_text = "I'm a programmer, blah blah here is some powerful statement";
    const website_speed_text = "I love efficiency and performance, so instead of using a template, I decided to build my own website from the ground up. Try it, it's fast.";
    if (isMobile){
        return (
            <div className="Mobile-Homescreen">
                <div className="mobile-landing">
                    <div className="flex-center-col">
                        <img src={profilepic} alt="Headshot of Oren Kohavi smiling" className="mobile-profilepic centered not-selectable"/>
                        <h1 style={{color : 'white', fontSize : '10vw'}}>Hi, I'm Oren :)</h1>
                        <h2 style={{color : 'white', fontSize : '6vw'}}>Download my resume <u>here</u></h2>
                    </div>
                    <div className='flex-center-col'>
                        
                        <h2 style={{color : 'white', fontSize : '6vw', maxWidth : '75vw', textAlign: 'center'}}>I programmed this site myself and there's a ton of cool features, but it's designed for desktop. <br></br> Check it out there to get the full experience!</h2>
                    </div>
                </div> 
            </div>
        )
    }
    /*
    <h1 className="introtext white centered nomargin">Hi, I'm Oren</h1>
                    <h2 className="white centered">I'm a tech person, blah blah</h2>
                    <h2 className="white centered">I love efficiency and high performance, so instead of using a template, I decided to build an highly-performant website from scratch using react</h2>
                    <img src={profilepic} alt="impasta!" className="profilepic centered"/>
                    <h2 className="white centered">Download my resume <u>here</u></h2>

                    https://codesandbox.io/s/react-fadein-out-transition-component-eww6j
    */
    return (
        <div className="Homescreen">
            <div className="landing">
                <div className="landing-about">
                    <div className="landing-picture-hello">
                        <img src={profilepic} alt="Headshot of Oren Kohavi smiling" className="profilepic not-selectable"/>
                        <div className="intro-text-container">
                            <h1 className="hello-text">Hi, I'm Oren :)</h1>
                            <h2 className="hello-text-small">{description_text}</h2>
                        </div>
                    </div>
                    <div className="landing-details">
                        <br className='not-selectable'></br>
                        <h2 className="landing-details-text">
                            {website_speed_text}
                        </h2>
                        <br className='not-selectable'></br>
                        <h2 className="landing-details-text">
                            Read my resume <a className="resume-link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">here</a>
                        </h2>
                    </div>
                </div>
            </div>
            <div className="whitebg" style={{backgroundColor : 'white'}}>
                <div className="projects-landing centered">
                    <h1 className="centered">Making projects is cool, see all my projects here!</h1>
                    <Link to={"/projects"}><AwesomeButton type="primary">Projects</AwesomeButton></Link>
                </div>
                <div className="sourceCodeDisplay centered">
                    <p>This website was coded from scratch in React</p>
                    <span>Code is available </span> <a href="https://github.com/OrenKohavi/OrenKohavi.github.io">Here</a>
                </div>
            </div>
            
        </div>
    )
}