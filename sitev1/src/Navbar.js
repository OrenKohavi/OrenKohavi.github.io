import './Navbar.css';
import './global.css';
import { Link, useLocation } from "react-router-dom";
import home_icon from './img/home_icon.png';

export default function Navbar(props) {
    const location = useLocation().pathname;
    let hideNavbar = location.includes("/home") && false;
    if (hideNavbar) {
        return null;
    }
    return (
        <div className="navbar centered" style={{background: props.bg}}>
            <div className="navbar-links">
                <LinkButton to={"/home"} icon={home_icon} text={"Home"}/>
                <Bar/>
                <LinkButton to={"/about"} text={"About"}/>
                <Bar/>
                <LinkButton to={"/projects"} text={"Projects"}/>
                {/*
                <Bar/>
                <LinkButton to={"/projects/sorting"} text={"Sorting Game"}/>
                */}
            </div>
        </div>
    )
}

function LinkButton(props) {
    let icon_body = null //Empty element unless there is an icon
    if (props.icon) {
        icon_body = <img className='navbar-link-icon' src={props.icon}></img>
    }
    return (
        <div className='navbar-link'>
            <Link to={props.to}>
                <button className='navbar-link-button'>
                    <div className='navbar-content'>
                        {icon_body}
                        <span className="navbar-link-text">{props.text}</span>
                    </div>
                </button>
            </Link>
        </div>
    )
}

function Bar() {
    return (
        <div className='navbar-bar'></div>
    )
}