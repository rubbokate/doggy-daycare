import React, { useState } from 'react';
import { LoginButton } from './styles';
import SignupLoginModal from "../layout/SignupLoginModal";

function ModalButton() {

    const [show, setShow] = useState(false);

    return (
        <div>
            <LoginButton size="lg" onClick={() => setShow(true)}>
                SignUp/Login{" "}
                <span role="img" aria-label="rocket">

                </span>
            </LoginButton>

            <SignupLoginModal show={show} setShow={setShow} />
        </div>
    )
}

export default ModalButton;