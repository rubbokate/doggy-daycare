import React, { useState } from "react";
import Milestones from "../Milestones";
import { Container } from "react-bootstrap";
import {
    LandingBackground,
    PaddedCol,
    ResponsiveHeader2,
    ResponsiveHeader4,
    ResponsiveParagraph,
    FullRow,
    LoginButton,
    VerticalCenterWrapper
} from "./styles";
import SignupLoginModal from "../SignupLoginModal";

const URL = "https://cdn.pixabay.com/photo/2014/01/17/19/01/tree-247122_1280.jpg";

const Landing = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <LandingBackground className={"z-depth-5"} url={URL}>
                <FullRow>
                    <PaddedCol xs={{ span: 10, offset: 1 }} sm={{ span: 5, offset: 1 }}>
                        <ResponsiveHeader2>Something Here</ResponsiveHeader2>
                        <ResponsiveParagraph>Something Here</ResponsiveParagraph>
                    </PaddedCol>
                    <PaddedCol xs={{ span: 10, offset: 1 }} sm={{ span: 5, offset: 1 }}>
                        <VerticalCenterWrapper>
                            <LoginButton size="lg" onClick={() => setShow(true)}>
                                SignUp/Login{" "}
                                <span role="img" aria-label="rocket">
                                    🚀
                                </span>
                            </LoginButton>
                        </VerticalCenterWrapper>
                    </PaddedCol>
                </FullRow>
                <SignupLoginModal show={show} setShow={setShow} />
            </LandingBackground>

            <Container style={{ minHeight: "900px" }}>
                <ResponsiveHeader4>Something Here</ResponsiveHeader4>
                <p>
                    Something Here{" "}
                    <span role="img" aria-label="cats">
                        🐱
                    </span>
                </p>
                <Milestones referrals={0} />
            </Container>
        </div>
    );
};

export default Landing;