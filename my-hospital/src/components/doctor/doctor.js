import React from "react";
import './doctor.scss';

const Doctor = ({doctor}) => {
    console.log(doctor);
    return (
        <div className="doctor">
            <img src={`http://localhost:5000/${doctor.img}`}/>
            <div className="doctor__name">{doctor.ism}</div>
            <div className="doctor__category">{doctor.bolim.bolim}</div>
            <div className="doctor__icon">
                <a href="#"><img src={require('../../public/img/linkedin.png')}/></a>
                <a href="#"><img src={require('../../public/img/facebook.png')}/></a>
                <a href="#"><img src={require('../../public/img/instagram.png')}/></a>
            </div>
            <button>View Profile</button>
        </div>
    )
}

export default Doctor