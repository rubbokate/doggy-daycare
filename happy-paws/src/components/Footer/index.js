import React from "react";
import { Link } from "react-router-dom";
import { StyledFooter } from "./styles";
import ModalButton from "../ModalButton/";


const Footer = () => {
    
    return (
        <StyledFooter sticky="bottom">
            <div style={{ float: "left" }}>© 2021 Copyright: Doggy Daycare</div>
            <div style={{ float: "right", marginLeft: "auto" }}>
          
           
           
                <Link to="/about"></Link> <Link to="/about"></Link>
            </div>
          
            <ModalButton />
        </StyledFooter>
    );
};

export default Footer;