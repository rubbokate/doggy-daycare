import React from "react";

import { StyledFooter } from "./styles";
import ModalButton from "../ModalButton";
// import Login from "../../Modal2/index";

const style = {
    backgroundColor: "midnightblue",
    
}

const Footer = () => {
    return (
        <StyledFooter sticky="bottom" style={style}>
            <div style={{float: "left", marginRight: "auto", color: "white"}}>© 2021 Copyright: Doggy Daycare</div>
            <div style={{ float: "right", marginLeft: "auto", marginRight: "auto" }}>

            <ModalButton />
            </div>
            {/* <Login /> */}
            


        </StyledFooter>

    );
};

export default Footer;