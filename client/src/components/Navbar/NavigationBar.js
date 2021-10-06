import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
// import styled from 'styled-components';

// const Styles = styled.div`
// .navbar {
//     background-color: #4c91ad;
//     animation: false;
// }
// .navbar-brand, .navbar-nav, .nav-link {
//     color: navy;
//     &:hover {
//         color: black;
//         animation: false;

//     }
// }
// `;

export const NavigationBar = () => (
    // <Styles>
    <div>

        <Navbar bg="light" variant="light" expand="md" id="nav-data">
            <Navbar.Brand href="/"><span id="logo"> Happy Paws Clubhouse </span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Item><Nav.Link href="/#/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/#/board">Board</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/#/daycare">Daycare</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/#/reservation">Reservation</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>


        


        </div>
    // </Styles>
)