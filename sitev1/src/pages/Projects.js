import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import '../global.css'

export default function Projects() {
    return (
        <div className="Projects centered">
            <h1>A List of all projects I've done:</h1>
            <h2>Only one so far, but there will eventually be more!</h2>
            <div className="projectList">
                <Link to={"/projects/sorting"}><AwesomeButton type="primary">Sorting Game</AwesomeButton></Link>
            </div>
        </div>
    )
}