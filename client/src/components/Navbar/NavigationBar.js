import React from 'react';
import { Nav, Navbar, Dropdown, NavItem, NavLink } from 'react-bootstrap';
import styled from 'styled-components';




const Styles = styled.div`
.navbar {
    background-color: #4c91ad;
    animation: false;
}
.navbar-brand, .navbar-nav, .nav-link {
    color: navy;
    &:hover {
        color: black;
        animation: false;

    }
}
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="xs">
            <Navbar.Brand href="/">Happy Paws Clubhouse</Navbar.Brand>
            

            <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}><Navbar.Toggle aria-controls="basic-navbar-nav" /></Dropdown.Toggle>
                <Dropdown.Menu>
                    <Nav.Item><Nav.Link to="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link to="/board">Board</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link to="/daycare">Daycare</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link to="/reservation">Reservation</Nav.Link></Nav.Item>
                </Dropdown.Menu>
            </Dropdown>

  
        </Navbar>
        <div>
        
            
        </div>
    </Styles>
)