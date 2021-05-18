
import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"


function Login(props) {
    return(
        <div style={{color: "white"}}>

Subscribe To Newsletter Here
<MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />

        </div>
    )
}

export default Login;
