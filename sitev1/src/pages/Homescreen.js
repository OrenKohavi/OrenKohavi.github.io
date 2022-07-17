import './Homescreen.css';
import '../global.css'
import resume from '../assets/Kohavi_Resume.pdf';
import profilepic from '../assets/headshot.png';
import { Link } from 'react-router-dom';
import {isMobile} from 'react-device-detect'
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import DownArrow from '../components/DownArrow';

export default function Homescreen() {
    const description_text = "I'm a programmer, blah blah here is some powerful statement";
    const website_speed_text = "I love efficiency and performance, so instead of using a template, I decided to build my own website from the ground up. Try it, it's fast.";
    
    var scrollDown = () => {
        //Scroll down to the bottom of the page
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }
    
    if (isMobile){
        return (
            <div className="Mobile-Homescreen">
                <div className="mobile-landing">
                    <div className="flex-center-col">
                        <img src={profilepic} alt="Headshot of Oren Kohavi smiling" className="mobile-profilepic centered not-selectable"/>
                        <h1 style={{color : 'white', fontSize : '10vw'}}>Hi, I'm Oren :)</h1>
                        <h2 style={{color : 'white', fontSize : '6vw'}}>Download my resume <a className="resume-link" href={resume} download="Kohavi_Resume.pdf">here</a></h2>
                    </div>
                    <div className='flex-center-col'>
                        
                        <h2 style={{color : 'white', fontSize : '6vw', maxWidth : '75vw', textAlign: 'center'}}>I programmed this site myself and there's a ton of cool features, but it's designed for desktop. <br></br> Check it out there to get the full experience!</h2>
                    </div>
                </div> 
            </div>
        )
    }
    return (
        <div className="Homescreen">
            <div className="landing">
                <div className="landing-about">
                    <div className="landing-picture-hello">
                        <img src={profilepic} alt="Headshot of Oren Kohavi smiling" className="profilepic not-selectable"/>
                        <div className="intro-text-container">
                            <span>
                                <h1 className="hello-text">Hi, I'm Oren</h1>
                                <h1 className='hello-text spin-hover smiley'>:)</h1>
                            </span>
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
                            Read my resume <a className="resume-link" href={resume} download="Kohavi_Resume.pdf">here</a>
                        </h2>
                    </div>
                    <div className="landing-arrow-div">
                        <br></br>
                        <br></br>
                        <DownArrow onClick={scrollDown} className="landing-arrow"/>
                    </div>
                </div>
            </div>
            <div className='blue-white-blend'></div>
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