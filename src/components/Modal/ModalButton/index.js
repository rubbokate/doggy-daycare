import React, { useState } from 'react';
// import MyComponent from "../Ref";
import { LoginButton, SubscriptionCaption } from './styles';
import SignupLoginModal from "../SignupLoginModal";
import './index.css'


function ModalButton(props) {

    const [show, setShow] = useState(false);



    return (
        <div>
            <SubscriptionCaption>
                Subscribe For Daily Updates
       </SubscriptionCaption>


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