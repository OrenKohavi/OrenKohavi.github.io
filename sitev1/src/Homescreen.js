import './Homescreen.css';
import profilepic from './img/crewmate_profilepic.jpg';

export default function Homescreen() {
    return (
        <div className="Homescreen">
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