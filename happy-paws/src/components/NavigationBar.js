import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
    background-color: #eee8aa;
}
.navbar-brand, .navbar-nav, .nav-link {
    color: #0000ff;
    &:hover {
        color: black;

    }
}
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="xs">
            <Navbar.Brand href="/">Happy Paws Clubhouse</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/board">Board</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/daycare">Daycare</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/train">Train</Nav.Link></Nav.Item>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)