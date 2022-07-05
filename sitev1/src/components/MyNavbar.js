//import './MyNavbar.css';
import '../global.css';
import { Link, useLocation } from "react-router-dom";
import home_icon from '../assets/home_icon.png';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


export default function MyNavbar(props) {
    const location = useLocation().pathname;
    let hideNavbar = location.includes("/home");
    //if (hideNavbar) {
    //    return null;
    //}
    return (
        <div className="boostrap-navbar">
        <Container class='position-absolute top-0 start-0'>
            <Navbar variant='dark' bg={props.bg} sticky='top'>
                <Container>
                    {/*<Navbar.Brand href="#/home">Home</Navbar.Brand>*/}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="navbar-links">
                        <Nav.Link href="#/home">Home</Nav.Link>
                        <Nav.Link href="#/projects">Projects</Nav.Link>
                        <Nav.Link href="#/projects">Else</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Container>
        </div>
    );
    /*
    return (
        <div className="navbar centered" style={{background: props.bg}}>
            <div className="navbar-links">
                <LinkButton to={"/home"} icon={home_icon} text={"Home"}/>
                <Bar/>
                <LinkButton to={"/about"} text={"About"}/>
                <Bar/>
                <LinkButton to={"/projects"} text={"Projects"}/>
            </div>
        </div>
    )
    */
}

function LinkButton(props) {
    let icon_body = null //Empty element unless there is an icon
    if (props.icon) {
        icon_body = <img className='navbar-link-icon' alt="" src={props.icon}></img>
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