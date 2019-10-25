import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';
import headerLogo from '../images/svg/HeaderLogo.svg'

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbg">
            <NavLink exact to="/" className="nav-link">Home</NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                </Nav>
                <Nav>
                   
                    <NavLink  to="/AboutChargeXO" className="nav-link">About ChargeXO</NavLink>                    
                   
                   <NavDropdown href="/" className="nav-link"  title="Lithium Technology" id="collasible-nav-dropdown">
                    <NavLink  to="/CellTechnology" className="sublink">Cell Technology</NavLink><br></br>
                    <NavLink  to="/Manufacturing" className="sublink">Manufacturing Process</NavLink>
                    </NavDropdown>
                    <NavLink to='/Applications' className="nav-link">Applications</NavLink>
                    <NavLink to='/TechCollab' className="nav-link">Technology Collaboration</NavLink>
                    <NavDropdown  className="nav-link"  title="Managment Experiance" id="collasible-nav-dropdown">
                    <NavLink to='/AboutUS' className="sublink">About US</NavLink></NavDropdown>                  
                    
                    <NavLink to='/contact' className="nav-link">Contact Us</NavLink>

                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}
export default Navigation