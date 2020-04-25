import React from 'react';

import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom"

class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Link to="" className="navbar-brand">
                    Navbar
                </Link>
                {/*<Navbar.Brand href="/">Navbar</Navbar.Brand>*/}

                <Nav className="mr-auto">
                    <Link to="apartments" className="nav-link">Apartments</Link>
                </Nav>
            </Navbar>
        );
    }

}

export default NavigationBar;