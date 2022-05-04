import React from "react"
import { Navbar, Nav, Button} from "react-bootstrap";




// links to the website 
const NavBar = props => {
    const {switchTheme, theme} = props;

    return (
        <div className="navbar"  data-theme={theme}>
            <Navbar>
                <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/resume">Resume</Nav.Link>
                <Nav.Link href="/contact">Hire Me</Nav.Link>
                </Nav>
            </Navbar>
            <Button onClick={switchTheme} variant={theme === "light" ? "dark" : "light"} size="md">
                    {theme === "light" ? "dark mode" : "light mode"}
            </Button>
        </div>
    )
}

export default NavBar