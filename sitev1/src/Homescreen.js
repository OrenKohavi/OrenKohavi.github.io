import './Homescreen.css';
import { Link } from "react-router-dom";

export default function Homescreen() {
    return (
        <div className="Homescreen">
            <div id="tmp">
                <h1>Just a temporary (plaintext) website for now</h1>
                <h2>I bet this looks just like air force websites tho</h2>
            </div>
            <div id="sourceCodeDisplay">
                <p>This website was coded from scratch in React</p>
                <span>Code is available </span> <a href="https://github.com/OrenKohavi/OrenKohavi.github.io">Here</a>
            </div>
        </div>
    )
}