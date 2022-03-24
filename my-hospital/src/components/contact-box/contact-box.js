import React from "react";
import ColContact from "./col-contact/col-contact";
import './contact-box.scss';

const ContactBox = ({col}) => {

    const contact = [
        {
            title: 'Emergency',
            text1: '(237) 681-812-255',
            text2: '(237) 666-331-894',
            img: require('../../public/img/phone-contact.png')
        },
        {
            title: 'Location',
            text1: '0123 Some place',
            text2: '9876 Some country',
            img: require('../../public/img/location-contact.png')
        },
        {
            title: 'Email',
            text1: 'fildineeesoe@gmil.com',
            text2: 'myebstudios@gmail.com',
            img: require('../../public/img/email.png')
        },
        {
            title: 'Working Hours',
            text1: 'Mon-Sat 09:00-20:00',
            text2: 'Sunday Emergency only',
            img: require('../../public/img/time.png')
        },
    ]

    
    return (

        <ColContact contact={contact} col={col}/>

        )
    }

export default ContactBox







    // <div className="row">
    //     <div className="col-3">
    //         <div className="contactBox">
    //             <img src={require('../../public/img/phone-contact.png')}/>
    //             <div className="Box--title">Emergency</div>    
    //             <div className="Box--text">
    //                 <span>(237) 681-812-255</span>    
    //                 <span>(237) 666-331-894</span>    
    //             </div>
    //         </div>    
    //     </div>
    //     <div className="col-3">
    //         <div className="contactBox">
    //             <img src={require('../../public/img/location-contact.png')}/>
    //             <div className="Box--title">Location</div>    
    //             <div className="Box--text">
    //                 <span>0123 Some place</span>    
    //                 <span>9876 Some country</span>    
    //             </div>
    //         </div>    
    //     </div>
    //     <div className="col-3">
    //         <div className="contactBox">
    //             <img src={require('../../public/img/email.png')}/>
    //             <div className="Box--title">Email</div>    
    //             <div className="Box--text">
    //                 <span>fildineeesoe@gmil.com</span>    
    //                 <span>myebstudios@gmail.com</span>    
    //             </div>
    //         </div>    
    //     </div>
    //     <div className="col-3">
    //         <div className="contactBox">
    //             <img src={require('../../public/img/time.png')}/>
    //             <div className="Box--title">Working Hours</div>    
    //             <div className="Box--text">
    //                 <span>Mon-Sat 09:00-20:00</span>    
    //                 <span>Sunday Emergency only</span>    
    //             </div>
    //         </div>    
    //     </div>
    // </div>