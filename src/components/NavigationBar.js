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
                <Nav className="mr-auto">
                    <Link to="/apartments" className="nav-link">Apartments</Link>
                </Nav>
                <Nav className="align-items-end">
                    <Link to="/login" className="mr-sm-2">Sign In</Link>
                    <Link to="/join">Sign Up</Link>
                </Nav>
            </Navbar>
        );
    }

}

export default NavigationBar;