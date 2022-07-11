//import './MyNavbar.css';
import '../global.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";


export default function MyNavbar(props) {
    if (props.hide) {
        return null
    }
    //set navbar style to be fixed position at the top of the page
    var window_width = window.innerWidth
    window_width = (window_width * 0.9) + "px"
    const navbar_style = {
        position: "fixed",
        top: 0,
        left: 0,
        width: window_width,
    }
    return (
        <div className="boostrap-navbar" style={navbar_style}>
            <Navbar variant={props.variant}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="navbar-link me-auto">
                        <LinkContainer to="/home">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/projects">
                            <Nav.Link>Projects</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}