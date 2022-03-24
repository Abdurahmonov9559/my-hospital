import React from "react";
import ContactBox from "../../contact-box/contact-box";
import './home-contact.scss';

const HomeContact = () => {
    const col = true
    return (
        <div className="homeContact">
            <div className="container">
                <div className="stitle">Get in touch</div>    
                <div className="btitle">Contact</div>    
                <ContactBox col={col}/>
            </div>
        </div>
    )
}

export default HomeContact