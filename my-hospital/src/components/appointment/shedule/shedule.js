import React from "react";
import './shedule.scss';

const Shedule = () => {
    return (
        <div className="container">
            <div className="shedule">
                <div className="shedule__title">Shedule hours</div>
                <div className="shedule__date">
                    <ul>
                        <li>Monday <span className="line"></span> 09:00 AM - 07:00 PM</li>    
                        <li>Tuesday <span className="line"></span> 09:00 AM - 07:00 PM</li>    
                        <li>Wednesday <span className="line"></span> 09:00 AM - 07:00 PM</li>    
                        <li>Thursday <span className="line"></span> 09:00 AM - 07:00 PM</li>    
                        <li>Friday <span className="line"></span> 09:00 AM - 07:00 PM</li>    
                        <li>Saturday <span className="line"></span> 09:00 AM - 07:00 PM</li>    
                        <li>Sunday <span className="line"></span> Closed</li>    
                    </ul>  
                </div>
                <div className="shedule__call">
                    <img src={require('../../../public/img/phone2.png')} />
                    <div className="shedule__call--contact">
                        Emergency
                        <span>(237) 681-812-255</span>    
                    </div>    
                </div>
            </div>    
        </div>
    )
}

export default Shedule