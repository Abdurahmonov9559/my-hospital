import React from "react";
import ContactBox from "../../contact-box/contact-box";
import Form from "../../form/form";
import './get-contact.scss';

const GetContact = () => {
    return (
        <div className="getContact">
            <div className="container">
                <div className="getContact--left">
                    <div className="stitle">Get in touch</div>
                    <div className="btitle">Contact</div>
                    <Form />
                </div>       
                <div className="getContact--right">
                    <ContactBox />
                </div>       
            </div>
        </div>
    )
}

export default GetContact
